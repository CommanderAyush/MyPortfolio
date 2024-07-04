import styles from './ProjectsStyles.module.css';
import SocialSphere from '../../assets/SocialSphere.png';
import WeekEndBuddy from '../../assets/WeekEndBuddy.png';
import SnakeMania from '../../assets/SnakeMania.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={SocialSphere}
          link="https://github.com/CommanderAyush/SocialSphere"
          h3="SocialSphere"
          p="Chat Application"
        />
        <ProjectCard
          src={SnakeMania}
          link="https://snake-game-git-main-ayush-agrawals-projects-4b39b471.vercel.app/"
          h3="WeekEnd Buddy"
          p="Good Old Snake Game"
        />
        <ProjectCard
          src={WeekEndBuddy}
          link="https://week-end-buddy-hqty.vercel.app/"
          h3="Snake Mania"
          p="An Application To Find Movies"
        />
      </div>
    </section>
  );
}

export default Projects;
