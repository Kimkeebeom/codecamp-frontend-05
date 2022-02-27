import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchUseditemQuestionsArgs } from "../../../../commons/types/generated/types";
import ProductCommentsListUI from "./ProductCommentsList.presenter";
import { FETCH_USED_ITEM_QUESTIONS } from "./ProductCommentsList.query";

export default function ProductCommentsList(){
    const router = useRouter()

    const {data} = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
    >(FETCH_USED_ITEM_QUESTIONS, {
        variables: {useditemId: String(router.query.move), page:1}
    })  

    // function onLoadMore() {
    //     if (!data) return;
    
    //     fetchMore({
    //       variables: { page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1 },
    //       updateQuery: (prev, { fetchMoreResult }) => {
    //         if (!fetchMoreResult?.fetchUseditemQuestions)
    //           return { fetchBoardComments: [...prev.fetchUseditemQuestions] };
    //         return {
    //           fetchBoardComments: [
    //             ...prev.fetchUseditemQuestions,
    //             ...fetchMoreResult.fetchUseditemQuestions,
    //           ],
    //         };
    //       },
    //     });
    //   }
    

    return(
        <ProductCommentsListUI
            data={data}
        />
    )
}