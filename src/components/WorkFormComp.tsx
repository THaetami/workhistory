import { useEffect, useState } from 'react';
import '../styles/WorkFormComp.scss';
import { getJobFunction, JobFunction } from '../utils/source/job-function';
import { WorkData } from '../utils/source/works';
import { Dispatch, SetStateAction } from 'react';

import {
  onTitleChangeHandler, onCompanyChangeHandler, onDescriptionChangeHandler, onStartedMonthChangeHandler, onStartedYearChangeHandler, 
} from '../utils/helper';

interface WorkFromProps {
  addWork: (newWork: WorkData) => void;
  updateWorkById: (id: number, updatedWork: WorkData) => void;
  buttonToggle: () => void;
  workById: WorkData | undefined;
  setWorkById: Dispatch<SetStateAction<WorkData | undefined>>; 
}

interface Errors {
  title: string;
  company: string;
  started: string;
  ended: string;
}

const monthsArray = Array.from({ length: 12 }, (_, index) => {
  const monthIndex = index + 1;
  const date = new Date(Date.UTC(2000, index, 1));
  const monthName = date.toLocaleString('default', { month: 'short', timeZone: 'UTC' });
  return { monthIndex, monthName };
});

export default function WorkFormComp({ buttonToggle, addWork, workById, setWorkById, updateWorkById }: WorkFromProps) {
  const currentYear = new Date().getFullYear();
  const futureYear = currentYear + 5;
  const startYear = 1990;

  const yearsArray = Array.from({ length: futureYear - startYear + 1 }, (_, index) => startYear + index);

  const [showCurrentFlag, setShowCurrentFlage] = useState(true);
  const [jobFunction, setJobFunction] = useState<JobFunction[]>([]);
  const [months] = useState(monthsArray);
  const [years] = useState(yearsArray);
  const [isFormValid, setIsFormValid] = useState(false);

  const [form, setForm] = useState<WorkData>({
    id: workById ? workById.id : 0,
    title: workById ? workById.title : '',
    company: workById ? workById.company : '',
    started: workById ? workById.started : '',
    ended: workById && workById.ended ? workById.ended : '',
    description: workById ? workById.description : '',
  });
  
  
  const [errors, setErrors] = useState<Errors>({
    title: '',
    company: '',
    started: '',
    ended: '',
  });

  const toggleCurrent = () => {
    setShowCurrentFlage(!showCurrentFlag);
    setForm({
      ...form,
      ended: '',
    });
  }

  const cancelButton = () => {
    buttonToggle();
    setWorkById(undefined);
  }

  useEffect(() => {
    const data = getJobFunction();
    setJobFunction(data);

    const { title, company, started, ended } = form;
    console.log(ended?.length)

    // Periksa semua validasi di sini
    if (
      title.trim() === '' ||
      company.trim() === '' ||
      started.trim().length !== 8 ||
      (showCurrentFlag && ended?.trim().length !== 8) ||
      (ended && (ended.trim().length ?? 0) > 0 && (ended.trim().length ?? 0) !== 8)
    ) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [errors, form, showCurrentFlag]);


  useEffect(() => {
    workById ? setIsFormValid(true) : setIsFormValid(false);
    if (workById?.ended === '') {
      setShowCurrentFlage(false);
    } else {
      setShowCurrentFlage(true)
    }
  }, [workById]);

  const handleTitleChange  = (event: React.ChangeEvent<HTMLInputElement>) => {
    onTitleChangeHandler(event, form, setForm, errors, setErrors);
  };

  const handleCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onCompanyChangeHandler(event, form, setForm, errors, setErrors)
  };
  
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onDescriptionChangeHandler(event, form, setForm)
  };

  const handleStartedMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onStartedMonthChangeHandler(event, form, setForm)
  };

  const handleStartedYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onStartedYearChangeHandler(event, form, setForm)
  };

  const handleEndedMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const yearValue = form.ended ? form.ended.split(' ')[1] : ''; // ambil year dari form.ended jika ada
    const updatedDate = `${value} ${yearValue}`;

    setForm({
      ...form,
      ended: updatedDate,
    });
  };

  const handleEndedYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const monthValue = form.ended ? form.ended.split(' ')[0] : ''; // ambil month dari form.ended jika ada
    const updatedDate = `${monthValue} ${value}`;
    setForm({
      ...form,
      ended: updatedDate,
    });
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isFormValid) {
      const { started, ended } = form;
      const dateStarted = new Date(started);
      const dateEnded = ended ? new Date(ended) : null; 

      if (dateEnded && dateEnded < dateStarted) { 
        setErrors((prevErrors) => ({
          ...prevErrors,
          ended: 'Waktu salah'
        }));
      } else {
        if (!showCurrentFlag) {
          if (workById) {
            updateWorkById(workById.id, {
              ...form,
              ended: ''
            });
          } else {
            addWork({
              ...form,
              ended: '',
              id: Date.now(),
            });
          }
          setWorkById(undefined);
          buttonToggle();
        } else {
          if (workById) {
            updateWorkById(workById.id, form);
          } else {
            addWork({
              ...form,
              id: Date.now(),
            });
          }
          buttonToggle();
          setWorkById(undefined);
        }
      }
    }
  };

  return (
      <>
      <div className="work-form">
        <div className="header">
          <div className="mr-2 header-title">Edit Work Experience</div>
        </div>
        <form onSubmit={onSubmitHandler} className="wrap-form">

          {/* title */}
          <div className="wrap-input">
            <div className="title-label">
              <div className="title">Job Title <span className="stars">*</span></div>
            </div>
            <div className="title-label wrap-label">
              <input
                onChange={handleTitleChange}
                value={form.title}
                type="text"
                className="input-custom"
                placeholder="Enter your job title"
              />
            </div>  
          </div>
          {errors.title && <small className="error">{errors.title}</small>}

          {/* company */}
          <div className="wrap-input">
            <div className="title-label">
              <div className="title">Company <span className="stars">*</span></div>
            </div>
            <div className="title-label wrap-label">
              <input
                onChange={handleCompanyChange}
                value={form.company}
                type="text"
                className="input-custom"
                placeholder="Enter company name"
              />
            </div>  
          </div>
          {errors.company && <small className="error">{errors.company}</small>}

          <div className="wrap-selected">

            {/* started */}
            <div className="wrap-input">
              <div className="title-label">
                <div className="title">From <span className="stars">*</span></div>
              </div>
              <div className="select-wrap">
                <div className="title-label wrap-label">
                  <select
                    className="input-custom"
                    onChange={handleStartedMonthChange}
                    value={form.started ? form.started.split(' ')[0] : ''}
                  >
                    <option value="" >Month</option>
                    {months.map(({ monthIndex, monthName }) => (
                      <option key={monthIndex} value={monthName} className="select-option-custom">
                        {monthName}
                      </option>
                    ))}
                  </select>
                </div>  
                <div className="title-label wrap-label">
                  <select
                    className="input-custom"
                    onChange={handleStartedYearChange}
                    value={form.started ? form.started.split(' ')[1] : ''}
                  >
                    <option value="" >Year</option>
                    {years
                      .sort((a, b) => b - a)
                      .map((year, index) => (
                        <option key={index} value={year} className="select-option-custom">
                          {year}
                        </option>
                      ))
                    }
                  </select>
                </div>  
              </div>
            </div>

            {/* endedd */}
            {showCurrentFlag && 
              <>
                <div className="wrap-input">
                  <div className="title-label title-label-to">
                    <div className="title">To <span className="stars">*</span></div>
                  </div>
                  <div className="select-wrap">
                    <div className="title-label wrap-label">
                      <select
                        className="input-custom"
                      onChange={handleEndedMonthChange}
                      value={form.ended ? form.ended.split(' ')[0] : ''}
                      >
                        <option value="">Month</option>
                        {months.map(({ monthIndex, monthName }) => (
                          <option key={monthIndex} value={monthName} className="select-option-custom">
                            {monthName}
                          </option>
                        ))}
                      </select>
                    </div>  
                    <div className="title-label wrap-label">
                      <select
                        className="input-custom"
                      onChange={handleEndedYearChange}
                      value={form.ended ? form.ended.split(' ')[1] : ''}
                      >
                        <option value="" >Year</option>
                        {years
                          .sort((a, b) => b - a)
                          .map((year, index) => (
                            <option key={index} value={year} className="select-option-custom">
                              {year}
                            </option>
                          ))
                        }
                      </select>
                    </div>  
                  </div>
                </div>
              </>
            }

          </div>
          <div className="wrap-checkbox mt-0">
            {errors.ended && <small className="error">{errors.ended}</small>}
          </div>


          <div className="wrap-checkbox">
            <input
              checked={!showCurrentFlag}
              onChange={toggleCurrent}
              type="checkbox"
              name="currentFlag"
              id="currentFlag"
              className="custom-checkbox cursor-pointer"
            />
            <label htmlFor="currentFlag" >I currently work here</label>
          </div>

          {/* descriptioin */}
          <div className="wrap-textarea">
            <div className="label-textarea">Accomplishments or descriptions (optional)</div>
            <textarea
              onChange={handleDescriptionChange}
              value={form.description || ''}
              rows={5}
              className="textarea-custom"
            ></textarea>

          </div>

          <div className="wrap-selected">
            <div className="wrap-job">
              <div className="wrap-job-title">
                <div className="title">Job Level</div>
              </div>
              <select className="select-job-custom">
                <option value="" >Not Applicable</option>
                <option value="1" className="select-option-custom">Intership / OJT</option>
                <option value="2" className="select-option-custom">Entry Level / Junior, Apprentice</option>
                <option value="3" className="select-option-custom">Associate / Supervisor</option>
                <option value="4" className="select-option-custom">Mid-Senior Level / Manager</option>
                <option value="5" className="select-option-custom">Director / Executive</option>
              </select>
            </div>
            <div className="wrap-job">
              <div className="wrap-job-title">
                <div className="title">Job Function</div>
              </div>
              <select className="select-job-custom">
                <option value="" >e.g. Accounting and Finance</option>
                {
                  jobFunction.map((job) => (
                    <option key={job.id} className="select-option-custom" value={job.name}>
                      { job.name }
                    </option>
                  ))
                }
              </select>
            </div>
          </div>

          <div className="wrap-salary">
            <div>Previous Salary (optional)</div>
              <div>Provide a salary for better job matches. Only you can see it.</div>
                      
              <div className="wrap-selected">
                  <div className="wrap-salary-tag">
                      <div className="wrap-job-title">
                          <div className="title">Currency</div>
                      </div>
                      <select className="select-job-custom">
                          <option value="1" className="select-option-custom">PHP - ₱</option>
                          <option value="2" className="select-option-custom">USD - $</option>
                          <option value="3" className="select-option-custom">IDR - Rp</option>
                      </select>
                  </div>
                  <div className="wrap-salary-tag">
                      <div className="wrap-job-title">
                          <div className="title">Amount</div>
                      </div>
                      <input type="text" className="input-salary-custom select-job-custom" placeholder="e.g. 20, 000"/>
                  </div>
                  <div className="wrap-salary-tag">
                    <div className="wrap-job-title">
                        <div className="title">Frequency</div>
                    </div>
                    <select className="select-job-custom cursor-pointer">
                      <option value="2" className="select-option-custom">Per Month</option>
                      <option value="1" className="select-option-custom">Per Year</option>
                      <option value="4" className="select-option-custom">Per Day</option>
                      <option value="5"  className="select-option-custom">Per Hours</option>
                    </select>
                  </div>
              </div>
          </div>

          <div className="wrap-footer">
            <div onClick={cancelButton} className="button-custom cursor-pointer button-cancel">
              Cancel
            </div>
            <button disabled={!isFormValid} className={`${!isFormValid ? 'button-disabled' : 'button-enable'} button-custom cursor-pointer`}>
              Save
            </button>
          </div>
        </form>
      </div>
      </>
  )
}