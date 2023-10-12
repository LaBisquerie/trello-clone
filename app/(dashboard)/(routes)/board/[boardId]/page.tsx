const BoardIdPage = async ({ params } : {params: { boardId: string }}) => {
  return (
    <p>board id : {params.boardId}</p>
  )
}

export default BoardIdPage;