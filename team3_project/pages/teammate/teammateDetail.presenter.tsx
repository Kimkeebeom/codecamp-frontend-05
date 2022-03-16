import * as T from './teammateDetailstyles';

export default function TeamMateDetailUI() {
  return (
    <T.Wrapper>
      <T.WrapperLayout>
        <T.Header>
          <T.Avatar src="/images/avatar.png" />
          <T.Info>
            <T.Name>프로도</T.Name>
            <T.Detail>Web/app developer 서울 구로</T.Detail>
            <T.TagTendency>태그목록</T.TagTendency>
          </T.Info>
        </T.Header>
        <T.Body>
          <T.BodyHeader>진행중인 팀플</T.BodyHeader>
          <T.BodyList></T.BodyList>
        </T.Body>
        <T.Footer>
          <button>팀플 제안하기</button>
        </T.Footer>
      </T.WrapperLayout>
    </T.Wrapper>
  );
}
