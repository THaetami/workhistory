import ContentComp from "./ContentComp";
import HeaderComp from "./HeaderComp";
import { WorkData } from "../utils/source/works";
import '../styles/WorkListComp.scss';

interface WorkListCompProps {
  deleteWork: (id: number) => void;
  getWorkById: (id: number) => void;
  buttonToggle: () => void;
  works: WorkData[];
  deleteAllWork: () => void;
}

export default function WorkListComp({ buttonToggle, works, deleteWork, deleteAllWork, getWorkById }: WorkListCompProps) {
    return (
        <>
        <div className="work-list">
          <HeaderComp
            buttonToggle={buttonToggle}
            deleteAllWork={deleteAllWork}
            countWorkList={works.length}
          />
        
          {works.length ? (
            works
              .sort((a, b) => new Date(b.started).getTime() - new Date(a.started).getTime())
              .map((work) => (
                <ContentComp
                  work={work} key={work.id}
                  deleteWork={() => deleteWork(work.id)}
                  getWork={() => getWorkById(work.id)}
                  buttonToggle={buttonToggle}
                />
            ))
          ) : (
              <div className="wrap-no-experience">
                <div className="no-experience">
                </div>
              </div>
            )
          }
        </div>
        </>
    )
}