import { gql, useQuery } from "@apollo/client"
import { IQuery } from "../../../src/commons/types/generated/types"
import { withAuthHocQuiz } from "./withAuthHoc"

const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn{
            email
            name
        }
    }
`
const mainQuizPage = () => {
    const {data} = useQuery<
    Pick<IQuery, 'fetchUserLoggedIn'>
    >(FETCH_USER_LOGGED_IN)
    
    return(
        <div>
            {data?.fetchUserLoggedIn.name}님 환영합니다!!!
        </div>
    )
}

export default withAuthHocQuiz(mainQuizPage)