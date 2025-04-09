import { CourseWrapper, Title, Topics, TopicsList } from "./styles"

function Course () {
    return (
        <CourseWrapper>
            <Title>React Lessons
            </Title>
            <Topics>
            <TopicsList>React: Props_and_State</TopicsList>
            <TopicsList>React: Type_Script</TopicsList>
            <TopicsList>React: Object_Types</TopicsList>
            <TopicsList>React: Controlled_and_uncontrolled_components</TopicsList>
            <TopicsList>React: Children</TopicsList>
            <TopicsList>React: Styling_components</TopicsList>
            <TopicsList>React: Global_Styles</TopicsList>
            <TopicsList>React: useEffect</TopicsList>
            <TopicsList>React: axios</TopicsList>
            <TopicsList>React: server_requests</TopicsList>
            <TopicsList>React: useEffect</TopicsList>
            <TopicsList>React: Formik</TopicsList>
            <TopicsList>React: Yup</TopicsList>
            <TopicsList>React: Routing</TopicsList>
            </Topics>
            
        </CourseWrapper>
    )
}

export default Course