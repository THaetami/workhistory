import ContentComp from "./ContentComp"
import HeaderComp from "./HeaderComp"
import { WorkData } from "../utils/source/works"

interface WorkListCompProps {
  buttonToggle: () => void;
  works: WorkData[];
  // eslint-disable-next-line no-unused-vars
  deleteWork: (id: number) => void;
  deleteAllWork: () => void;
  // eslint-disable-next-line no-unused-vars
  getWorkById: (id: number) => void;
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