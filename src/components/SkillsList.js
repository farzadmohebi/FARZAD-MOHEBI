import React from "react"
import { Link } from "gatsby"

function SkillList(props) {
  function renderProjectData() {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
        {props.listData.map(skill => {
          return (
            <div className="group">
              <div className="absolute z-50 border text-opacity-80 border-trueGray-800 md:group-hover:border-orange-500 text-white font-mono font-semibold text-base md:text-lg bg-trueGray-900 px-2 py-1 -mt-4">
                {skill.node.category}
              </div>
              <div className="relative z-10 border h-full border-trueGray-800 w-full rounded md:group-hover:bg-trueGray-400 md:group-hover:bg-opacity-10 md:group-hover:border-orange-500">
                <div className="grid grid-rows-3 h-full p-4 md:p-8 md:pb-0 md:pt-5">
                  <div className="grid grid-cols-3 items-center w-full">
                    <div
                      id="proj-name"
                      className="text-lg md:text-xl font-semibold font-mono text-orange-500 md:group-hover:text-orange-400 col-span-full md:col-span-2"
                    >
                      {skill.node.name}
                      <br />
                      <span className="text-sm text-white text-opacity-80">
                        {skill.node.dates.start} - {skill.node.dates.end}
                      </span>
                    </div>
                    <div
                      id="proj-logo"
                      className="hidden md:flex justify-end items-center"
                    >
                      <GatsbyImage image={img} alt={skill.node.name} />
                    </div>
                  </div>
                  <div className="text-sm md:text-base text-white text-opacity-80 font-blogbody pt-2">
                    {skill.node.description}
                  </div>
                  <div className="flex flex-row items-center h-full">
                    <Link
                      to={`/project/${project.node.name
                        .replace(" -", "")
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
                    >
                      <button className="rounded px-2 py-1 hover:bg-trueGray-800 outline-none border border-white hover:border-orange-500 border-opacity-50 text-white text-opacity-80 font-mono mr-3">
                        Details
                      </button>
                    </Link>
                    {skill.node.projectlink !== "" ? (
                      <a
                        href={`${skill.node.projectlink}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="py-2 px-4 mr-3 text-white rounded outline-none border border-white border-opacity-50 hover:border-orange-500 hover:bg-trueGray-800 flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="white"
                            class="bi bi-globe"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                          </svg>
                        </button>
                      </a>
                    ) : null}
                    {skill.node.githublink !== "" ? (
                      <a
                        href={`${skill.node.githublink}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="py-2 px-4 text-white rounded outline-none border border-white border-opacity-50 hover:border-orange-500 hover:bg-trueGray-800 flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="white"
                            class="bi bi-github"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                          </svg>
                        </button>
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <div
      className="mt-10 md:mt-15 lg:mt-20"
      data-sal="zoom-out"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <div>{renderProjectData()}</div>
    </div>
  )
}

export default SkillList
