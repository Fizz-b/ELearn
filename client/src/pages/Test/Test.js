import React, { useEffect } from 'react'
import "./Test.css"
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import { getQuestions } from '../../actions/questionAction';
import { useDispatch, useSelector } from 'react-redux';

function Test() {
  const location = useLocation();
  const state = location.state;   /*   test data  table     */
  console.log(state);

  const dispatch = useDispatch();
  const questionList = useSelector(state => state.questionList);
  const { questions, loadding, error } = questionList; 



  const handleTest = ()=>{
    dispatch(getQuestions(state._id));
    console.log(state._id);
  }
  return (
    <>
    <section>
      <div className="test-info">
       <h1>{state.name} Test {state.testNumber}</h1>
        <div class="btn-group">
          <button id="group">Thong tin de thi</button>
          <button id="group">Dap an/Transcript</button>
          
        </div>
       <p>Thoi gian lam bai: {state.time} phut | {state.part} phan thi | {state.numberQuestion} cau hoi</p>
       <div></div>

        
        <div class="alert alert-warning" role="alert" id="alert">
          Sẵn sàng để bắt đầu làm full test? Để đạt được kết quả tốt nhất, bạn cần dành ra 120 phút cho bài test này.
        </div>
        <Link to="/toeic"  state={state}  >
        <button type="button" class="btn btn-primary" id="button-start" onClick={handleTest}>Bat dau lam bai thi</button>
        </Link>
      </div>



      <div className="comment">
         <h1> Comment</h1>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Gui binh luan cua ban" aria-label="Gui binh luan cua ban" aria-describedby="basic-addon2" id="comment-bar"></input>
            <span class="input-group-text" id="basic-addon2">Gui</span>
        </div>
      </div>
      </section>
    </>
  )
}

export default Test