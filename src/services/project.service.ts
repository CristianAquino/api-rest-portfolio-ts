import { Images, Projects, Skills, Users } from "../entities";
import { ProjectDTO } from "../entities/DTO";
import {
  ParamsType,
  ProjectCreateType,
  ProjectUpdateImageType,
  ProjectUpdateSkillsType,
  ProjectUpdateType,
} from "../types";
import { CreatedError, NotFoundError, UpdatedError } from "../utils";

async function allProjectDataService() {
  const project = await Projects.find({
    relations: {
      skills: true,
      image: true,
    },
  });

  if (project.length == 0) {
    return "No projects created yet";
  } else {
    const projectDTO = project.map((project) => new ProjectDTO(project));
    return projectDTO;
  }
}

async function meProjectDataService({
  uuid,
}: Omit<ParamsType<unknown>, "data">) {
  const user = await Users.findOneBy({ uuid });

  if (!user) throw new NotFoundError("User not found, please try again");

  const id = user.id;

  const project = await Projects.createQueryBuilder("projects")
    .innerJoinAndSelect("projects.skills", "skills")
    .innerJoinAndSelect("projects.image", "image")
    .where("projects.user = :id", { id })
    .getMany();

  if (!project)
    throw new NotFoundError("No project created yet, please try again");

  const projectDTO = project.map((project) => new ProjectDTO(project));

  return projectDTO;
}

async function createProjectUserSerice({
  uuid,
  data,
}: ParamsType<ProjectCreateType>) {
  const user = await Users.findOneBy({ uuid });

  if (!user) throw new NotFoundError("User not found, please try again");

  const project = new Projects();
  const image = new Images();

  const skills = await Promise.all(
    data.skills.map(async (skill) => await Skills.findOneBy({ id: skill }))
  );

  if (skills.filter((e) => e !== null).length > 0) {
    project.title = data.title;
    project.link = data.link;
    project.description = data.description;
    project.user = user;
    project.skills = skills as Skills[];
    image.thumbnail = data.thumbnail;
    project.image = await image.save();

    const newProject = await project.save();

    if (!newProject)
      throw new CreatedError(
        "Could not register in the database, please try again"
      );

    return "Created Project";
  } else {
    throw new CreatedError("Skills entered is not valid, please try again");
  }
}

async function updateProjectService({
  data,
  uuid,
}: ParamsType<ProjectUpdateType>) {
  const user = await Users.createQueryBuilder("users")
    .innerJoinAndSelect("users.projects", "projects")
    .where("users.uuid = :uuid", { uuid })
    .getOne();

  if (!user) throw new NotFoundError("User not found, please try again");

  const myProjects = user.projects.map((project) => project.id);

  if (myProjects.includes(data.id)) {
    const { id, ...sf } = data;

    const project = await Projects.createQueryBuilder("project")
      .innerJoinAndSelect("project.skills", "skill")
      .where("project.id = :id", { id })
      .getOne();

    if (!project)
      throw new NotFoundError("Project not found, please try again");

    const projectUpdate = await Projects.update({ id }, { ...sf });

    if (projectUpdate.affected === 0)
      throw new UpdatedError("Could not update the project, please try again");

    return "Project updated";
  } else {
    throw new NotFoundError("Project not found, please try again");
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

  if (!user) throw new NotFoundError("User not found, please try again");

  const myProjects = user.projects.map((project) => project.id);

  if (myProjects.includes(id)) {
    const project = await Projects.createQueryBuilder("project")
      .innerJoinAndSelect("project.image", "images")
      .where("project.id = :id", { id })
      .getOne();

    if (!project)
      throw new NotFoundError("Project not found, please try again");

    const image = await Images.findOneBy({ id: project.image.id });

    if (!image) throw new NotFoundError("Image not found, please try again");

    await project.remove();
    await image.remove();

    return `Project with ${id} is deleted`;
  } else {
    throw new NotFoundError("Project not found, please try again");
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

  if (!user) throw new NotFoundError("User not found, please try again");

  const myProjects = user.projects.map((project) => project.id);

  if (myProjects.includes(data.id)) {
    const { id, image } = data;

    const project = await Projects.createQueryBuilder("projects")
      .innerJoinAndSelect("projects.image", "images")
      .where("projects.id = :id", { id })
      .getOne();

    if (project?.image.id !== image.id)
      throw new NotFoundError(
        "The image has no relation to the project, please try again"
      );

    const imageUpdate = await Images.update(
      { id: image.id },
      { thumbnail: image.thumbnail }
    );

    if (imageUpdate.affected === 0)
      throw new UpdatedError(
        "Could not update the project image, please try again"
      );

    return "Image update";
  } else {
    throw new NotFoundError("Project not found, please try again");
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

  if (!user) throw new NotFoundError("User not found, please try again");

  const myProjects = user.projects.map((project) => project.id);

  if (myProjects.includes(data.id)) {
    const { id, skills } = data;

    const project = await Projects.findOneBy({ id });

    if (!project)
      throw new NotFoundError("Project not found, please try again");

    const newskills = await Promise.all(
      skills.map(async (skill) => await Skills.findOneBy({ id: skill }))
    );

    if (newskills.filter((e) => e !== null).length > 0) {
      project.skills = newskills as Skills[];

      await project.save();

      return "Skills update";
    } else {
      throw new CreatedError("Skills entered is not valid, please try again");
    }
  } else {
    throw new NotFoundError("Project not found, please try again");
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
