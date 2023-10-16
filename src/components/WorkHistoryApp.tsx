import { useEffect, useState } from "react";
import WorkListComp from "./WorkListComp";
import WorkFormComp from "./WorkFormComp";
import { getData, WorkData } from "../utils/source/works";

export default function WorkHistoryApp() {

  const [showWorkList, setShowWorkList] = useState(true);
  const [workList, setWorkList] = useState<WorkData[]>([]);
  const [workById, setWorkById] = useState<WorkData | undefined>();

  useEffect(() => {
    const data = getData();
    setWorkList(data);
  }, []);


  const toggleWorkComponent = () => {
    setShowWorkList(!showWorkList);
  };

  const addWork = (newWork: WorkData) => {
    const workWithId = {
      ...newWork,
    };
    setWorkList([...workList, workWithId]);
  };

  const deleteWork = (id: number) => {
    const works = workList.filter(work => work.id !== id);
    setWorkList(works);
  }

  const deleteAllWork = () => {
    setWorkList([]);
  }

  const getWorkById = (id: number) => {
    const workById = workList.find(work => work.id === id);
    setWorkById(workById);
  }

  const updateWorkById = (id: number, updatedWork: WorkData) => {
    const updatedList = workList.map(work => {
      if (work.id === id) {
        return {
          ...work,
          ...updatedWork
        };
      }
      return work;
    });
    setWorkList(updatedList);
  };

  return (
    <div className="kontener">
      <div className="history-app">
        { showWorkList ?
          <WorkListComp
            buttonToggle={toggleWorkComponent}
            works={workList}
            deleteWork={deleteWork}
            deleteAllWork={deleteAllWork}
            getWorkById={getWorkById}
          />
          :
          <WorkFormComp
            buttonToggle={toggleWorkComponent}
            addWork={addWork}
            workById={workById}
            updateWorkById={updateWorkById}
            setWorkById={setWorkById}
          />
        }
      </div>
    </div>
  );
}