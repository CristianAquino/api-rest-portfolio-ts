import { Images, Projects, Skills, Users } from "../entities";
import { ProjectDTO } from "../entities/DTO";
import { ParamsType, ProjectCreateType, ProjectUpdateType } from "../types";
import { CreatedError, NoContentError, NotFoundError } from "../utils";

async function allProjectData() {
  const project = await Projects.find({
    relations: {
      skills: true,
      image: true,
    },
  });
  if (project.length == 0)
    throw new NoContentError("No records have been created yet");
  const projectDTO = project.map((project) => new ProjectDTO(project));
  return projectDTO;
}

async function createUserProject({
  uuid,
  data,
}: ParamsType<ProjectCreateType>) {
  const user = await Users.findOneBy({ uuid });
  if (!user) throw new NoContentError("User not found");
  for (const item of data) {
    const project = new Projects();
    const image = new Images();
    const skills = await Promise.all(
      item.skills.map(async (skill) => await Skills.findOneBy({ id: skill }))
    );
    project.title = item.title;
    project.link = item.link;
    project.description = item.description;
    project.user = user;
    project.skills = skills as Skills[];
    image.thumbnail = item.thumbnail;
    const newImg = await image.save();
    project.image = newImg;
    await project.save();
  }
  return "created Project";
}
// pensar para realizar
// la actualizacion de
// image
// skill
async function updateDataProject({
  data,
}: Pick<ParamsType<ProjectUpdateType>, "data">) {
  const project = await Projects.findOneBy({ id: data.id });
  if (!project) throw new NotFoundError("Project not found");
  project.title = data.title;
  project.description = data.description;
  project.link = data.link;
  await project.save();
  return "updated Project";

  //     notfound.push(item.id);
  // for (const item of data) {
  //     continue;
  //   }
  //   await Projects.update({ id }, { ...sf });
  // }
  // if (notfound.length == 0) {
  //   return "updated Project";
  // } else {
  //   return notfound;
  // }
}

async function deleteDataProject({ id }: { id: string }) {
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
}

export {
  allProjectData,
  createUserProject,
  updateDataProject,
  deleteDataProject,
};
