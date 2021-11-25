import React, { Component } from "react";
import { viewAllComment, createComment, createCommentToComment, deleteComment, updateComment, getCommentsWriteUsers } from "../../../utilities/api";
import CommentComponent from "./Comment.slave.component";
import CommentToCommentComponent from "./CommentToComment.slave.component"
import InputComment from "./InputComment.slave.component";
const TESTPOST = 4

export default class RenderComments extends Component {
  state ={
    comments: [],
    users: []
  }
  componentDidMount() {
    this.getCommentWriter()
    this.getComments()
  }
  // 게시글의 모든 댓글을 가져옵니다.
  getComments = async() => {
      try {
        const result = await viewAllComment(TESTPOST);
        this.setState({
          comments: result
        })
      } catch (error) {
        alert(error.message)
      }
    }
  // 모든 댓글 작성자들을 가져옵니다.
  getCommentWriter = async() => {
    try {
      const result = await getCommentsWriteUsers(TESTPOST);
      this.setState({
        users: result
      })
    } catch (error) {
      alert(error.message)
    }
  }
  // 새로운 코멘트를 작성합니다.
  writeComment = async(htmlcontent) => {
    const comments_temp = this.state.comments
    try {
      const result = await createComment(TESTPOST, htmlcontent);
      comments_temp.push(result)
      this.setState({...this.state, comments: comments_temp})
    } catch (error) {
      alert(error.message)
    }
  }
  // 새로운 답글을 잡성합니다.
  writeCommentToComment = async(commentId, htmlcontent) => {
    const comments_temp = this.state.comments
    try {
      const result = await createCommentToComment(commentId, TESTPOST, htmlcontent);
      // 자식 추가 이벤트
      comments_temp.forEach(comment => {
        if(comment.id === commentId){
          comment.childComment.push(result)
        }
      })
      this.setState({
        ...this.state,
        comments: comments_temp
      })
    } catch (error) {
      alert(error.message)
    }
  }
  // 댓글 또는 답글을 삭제합니다.
  removeComment = (id) =>{
    const comments_temp = this.state.comments
    console.log(comments_temp);
    try {
      console.log("hi");
      comments_temp.map(async(comment, idx)=>{
        if(comment.id === id) {
          await deleteComment(id)
          const result = comments_temp.filter(item=> item.id !== id)
          this.setState({...this.state, comments: result})
        }
        else {
          comment.childComment.map(async(childcomment, childidx) => {
          if(childcomment.id === id) {
            await deleteComment(id)
            const result = comments_temp[idx].childComment.filter(item=> item.id !== id)
            comments_temp[idx].childComment = result
            this.setState({...this.state, comments: comments_temp})
          }
        })
      }
      })
    } catch (error) {
      alert(error.message)
    }
  }
  modifycomment = async(commentId, htmlcontent) => {
    const comments_temp = this.state.comments
    try {
      comments_temp.map(async(comment, idx)=>{
        if(comment.id === commentId) {
          await updateComment(commentId, htmlcontent)
          comments_temp[idx].htmlContent = htmlcontent
          this.setState({...this.state, comments: comments_temp})
        }
        else {
          comment.childComment.map(async(childcomment, childidx) => {
          if(childcomment.id === commentId) {
            await updateComment(commentId, htmlcontent)
            comments_temp[idx].childComment[childidx].htmlContent = htmlcontent
            this.setState({...this.state, comments: comments_temp})
          }
        })
      }
      })
    } catch (error) {
      alert(error.message)
    }
  }
  // 댓글을 렌더링합니다.
  renderComments = () => {
    const { comments, users } = this.state;
    return(
    <>
    {
      !!comments && !!users && comments.map((comment)=>{
        
        return(
          <div key={comment.id}>
            <CommentComponent 
              deletecomment={this.removeComment} 
              updatecomment={this.modifycomment}
              writecommenttocomment={this.writeCommentToComment} 
              userinfo={users.find((userinfo)=> userinfo.id === comment.usersId)} 
              commentid={comment.id} 
              createdAt={comment.createdAt} 
              htmlContent={comment.htmlContent} 
              children= {
                !comment.childComment ?<></>
                : comment.childComment.length === 0
                ? <></>
                : <>{comment.childComment.map(childcomment =>{
                  return(
                    <div key={childcomment.id}>
                      <CommentToCommentComponent 
                        deletecomment={this.removeComment} 
                        updatecomment={this.modifycomment}
                        userinfo={users.find((userinfo)=> userinfo.id === childcomment.usersId)} 
                        commentid={childcomment.id} 
                        createdAt={childcomment.createdAt} 
                        htmlContent={childcomment.htmlContent} />                        
                    </div>
                  )
                })}</>
              }
            />
          </div>
         )
      })
    }
    </>
  )
}

  render(){
      return(
          <>
            {/* comment */}
            <div className="flex flex-col">
              {
                  !this.state.comments  && !this.state.users && this.state.comments === null
                ? <div>댓글 피칭 중</div> 
                : this.state.comments.length <= 0
                ? <div>댓글이 없어요</div> 
                : <>{this.renderComments()}</>
              }
            </div>
            <InputComment writecomment={this.writeComment} />
          </>
      )
  }
}
