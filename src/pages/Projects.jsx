import { Link, Routes, Route } from 'react-router-dom';
import Project1 from '../comp/Project1';
import Project2 from '../comp/Project2';
import Project3 from '../comp/Project3';

function Projects() {
  return (
    <>
      <div>Projects</div>
      <br />
      <Link to='project1'>Project1</Link>
      <br />
      <Link to='project2'>Project2</Link>
      <br />
      <Link to='project3'>Project3</Link>
      <Routes>
        <Route path='project1' element={<Project1 />} />
        <Route path='project2' element={<Project2 />} />
        <Route path='project3' element={<Project3 />} />
      </Routes>
    </>
  );
}
export default Projects;
