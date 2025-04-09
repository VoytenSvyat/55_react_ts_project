import { v4 } from "uuid"

import { lessonsData } from "./data"
import { CourseWrapper, ListItem, Title } from "./styles"

function Course () {
    const lessons = lessonsData.map((lesson: string)=> {
        return <ListItem key={v4()}>{lesson}</ListItem>
    })
    return (
        <CourseWrapper>
            <Title>React Lessons
            </Title>
            {lessons}
        </CourseWrapper>
    )
}

export default Course