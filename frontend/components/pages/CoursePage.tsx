// States
import { useEffect, useState } from "react";

// API functions
import { 
    prettifyString, 
    courseLocked, 
    courseProgress, 
    prettifyUrl 
} from "@/api/client/courses"

// Libraries
import Link from "next/link"


const CourseLesson = ({
    lessonCategory,
    lessons,
    profileDetails,
    courseData
}: any) => {
    const [lessonElements, setLessonElements] = useState<any>()
    const [lessonOpen, setLessonOpen] = useState(false)
    const [lessonsCompleted, setLessonsCompleted] = useState()

    useEffect(() => {
        const lessonPromise = Promise.all(lessons.map(async (lesson: any, index: any) => {
            const { lessonOn } = await courseProgress(courseData.name);
            const lessonLocked = await courseLocked(courseData, lessonOn - 1, lesson);

            !lessonLocked && setLessonsCompleted(index + 1)

            return (
                <li key={index} className={!lessonLocked ? "course-page-lesson-finished" : ""}>
                    <Link href={`/courses/${prettifyUrl(courseData.name)}/${lessonOn ? lessonOn : 0}`} className="course-page-lesson-link">
                        {prettifyString(lesson)}
                    </Link>
                </li>
            )
        }))

        lessonPromise.then((res) => setLessonElements(res)) 
    }, [lessons])


    const openLesson = () => {
        setLessonOpen(!lessonOpen)
    }

    return (
        <div className="course-page-lessons-lesson">
            <div className="course-page-lessons-lesson-1">
                <p>{prettifyString(lessonCategory)}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus turpis sit amet mi tempor maximus.</p>
            </div>
            <div className={`course-page-lessons-lesson-2 ${lessonOpen && "course-page-lessons-lesson-open"}`}>
                <div className="course-page-lessons-lesson-topbar">
                    <button className="course-page-lessons-lesson-2-collapse" onClick={openLesson}>
                        <i className="fa-solid fa-angle-right"></i>
                        <p>Collapse Course</p>
                    </button>
                    <p className="course-page-lessons-lesson-2-progress">{lessonsCompleted ? lessonsCompleted : 0}/{lessonElements && lessonElements.length}</p>
                </div>
                <div className="course-page-lessons-lesson-contents">
                    <ul>
                        {lessonElements}
                    </ul>
                </div>
            </div>
        </div>
    )
}


type CoursePageProps = {
    profileDetails: any,
    courseData: any
}

const CoursePage = ({
    profileDetails,
    courseData
}: CoursePageProps) => {
    const [courseLessons, setCourseLessons] = useState()

    useEffect(() => {
        setCourseLessons(
            courseData.lessons.map((lessonCategory: any, index: any) => {
                return (
                    <CourseLesson 
                        lessonCategory={lessonCategory.lessonCategory}
                        lessons={lessonCategory.lessons}
                        profileDetails={profileDetails}
                        courseData={courseData}
                        key={index}
                    />
                )
            })
        )
    }, [])


    return (
        <main className="course-page-container">
            <div className="course-page">
                <i className={`${courseData.icon} course-icon`}></i>
                <h1>{courseData.name}</h1>
                <p className="course-page-description">{courseData.description}</p>
                <h2>Courses</h2>
                <div className="course-page-lessons">
                    {courseLessons}
                </div>
            </div>
        </main>
    )
}

export default CoursePage