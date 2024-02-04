import { Images, Projects, Skills, Users } from "../entities";
import { ProjectDTO } from "../entities/DTO";
import {
  ParamsType,
  ProjectCreateType,
  ProjectUpdateImageType,
  ProjectUpdateSkillsType,
  ProjectUpdateType,
} from "../types";
import { NoContentError, UpdatedError } from "../utils";

async function allProjectDataService() {
  const project = await Projects.find({
    relations: {
      skills: true,
      image: true,
    },
  });
  if (project.length == 0) {
    return [];
  } else {
    const projectDTO = project.map((project) => new ProjectDTO(project));
    return projectDTO;
  }
}

async function meProjectDataService({
  uuid,
}: Omit<ParamsType<unknown>, "data">) {
  const user = await Users.findOneBy({ uuid });

  if (!user) throw new NoContentError("User not found");

  const id = user.id;

  const project = await Projects.createQueryBuilder("projects")
    .innerJoinAndSelect("projects.skills", "skills")
    .innerJoinAndSelect("projects.image", "image")
    .where("projects.user = :id", { id })
    .getMany();

  if (!project) return null;

  const projectDTO = project.map((project) => new ProjectDTO(project));

  return projectDTO;
}

async function createProjectUserSerice({
  uuid,
  data,
}: ParamsType<ProjectCreateType>) {
  const user = await Users.findOneBy({ uuid });

  if (!user) throw new NoContentError("User not found");
  const project = new Projects();
  const image = new Images();

  const skills = await Promise.all(
    data.skills.map(async (skill) => await Skills.findOneBy({ id: skill }))
  );

  project.title = data.title;
  project.link = data.link;
  project.description = data.description;
  project.user = user;
  project.skills = skills as Skills[];
  image.thumbnail = data.thumbnail;
  project.image = await image.save();

  await project.save();

  return "created Project";
}
// pensar para realizar
// la actualizacion de
// image
// skill
async function updateProjectService({
  data,
  uuid,
}: ParamsType<ProjectUpdateType>) {
  const user = await Users.createQueryBuilder("users")
    .innerJoinAndSelect("users.projects", "projects")
    .where("users.uuid = :uuid", { uuid })
    .getOne();

  if (!user) throw new NoContentError("Data project user not found");

  const myProjects = user.projects.map((project) => project.id);

  if (myProjects.includes(data.id)) {
    const { id, ...sf } = data;

    const project = await Projects.createQueryBuilder("project")
      .innerJoinAndSelect("project.skills", "skill")
      .where("project.id = :id", { id })
      .getOne();

    if (!project) throw new NoContentError("project not found");

    const projectUpdate = await Projects.update({ id }, { ...sf });

    if (projectUpdate.affected === 0)
      throw new UpdatedError("Could not update the user");

    return "user updated";
  } else {
    throw new NoContentError("project not found");
  }
}

async function deleteProjectUserService({
  id,
  uuid,
}: {
  id: string;
  uuid: string;
}) {
  const user = await Users.createQueryBuilder("users")
    .innerJoinAndSelect("users.projects", "projects")
    .where("users.uuid = :uuid", { uuid })
    .getOne();

  if (!user) throw new NoContentError("Data social user not found");

  const myProjects = user.projects.map((project) => project.id);

  if (myProjects.includes(id)) {
    const project = await Projects.createQueryBuilder("project")
      .innerJoinAndSelect("project.image", "images")
      .where("project.id = :id", { id })
      .getOne();

    if (!project) throw new NoContentError("Project not found");

    const image = await Images.findOneBy({ id: project.image.id });

    if (!image) throw new NoContentError("Image not found");

    await project.remove();
    await image.remove();

    return `Project with ${id} is deleted`;
  } else {
    throw new NoContentError("project not found");
  }
}

async function updateProjectImageService({
  uuid,
  data,
}: ParamsType<ProjectUpdateImageType>) {
  const user = await Users.createQueryBuilder("users")
    .innerJoinAndSelect("users.projects", "projects")
    .where("users.uuid = :uuid", { uuid })
    .getOne();

  if (!user) throw new NoContentError("Data social user not found");

  const myProjects = user.projects.map((project) => project.id);

  if (myProjects.includes(data.id)) {
    const { id, image } = data;

    const project = await Projects.createQueryBuilder("projects")
      .innerJoinAndSelect("projects.image", "images")
      .where("projects.id = :id", { id })
      .getOne();

    if (project?.image.id !== image.id)
      throw new NoContentError("Project not found");

    const imageUpdate = await Images.update(
      { id: image.id },
      { thumbnail: image.thumbnail }
    );

    if (imageUpdate.affected === 0)
      throw new UpdatedError("Could not update the user image");

    return "image update";
  } else {
    throw new NoContentError("project not found");
  }
}

async function updateProjectSkillService({
  data,
  uuid,
}: ParamsType<ProjectUpdateSkillsType>) {
  const user = await Users.createQueryBuilder("users")
    .innerJoinAndSelect("users.projects", "projects")
    .where("users.uuid = :uuid", { uuid })
    .getOne();

  if (!user) throw new NoContentError("Data social user not found");

  const myProjects = user.projects.map((project) => project.id);

  if (myProjects.includes(data.id)) {
    const { id, skills } = data;

    const project = await Projects.findOneBy({ id });

    if (!project) throw new NoContentError("Project not found");

    const newskills = await Promise.all(
      skills.map(async (skill) => await Skills.findOneBy({ id: skill }))
    );

    project.skills = newskills as Skills[];

    await project.save();

    return "skills update";
  } else {
    throw new NoContentError("project not found");
  }
}
export {
  allProjectDataService,
  createProjectUserSerice,
  deleteProjectUserService,
  meProjectDataService,
  updateProjectImageService,
  updateProjectService,
  updateProjectSkillService,
};
