import { useState, useEffect } from "react";
import { FeedbackOptions } from "./Feedback/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from './Notification/Notification'



export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [positiveReviews, setPositiveReviews] = useState(0)


  const addGoodreview = () => {setGood(prevState => prevState + 1)}
  const addNeutralreview = () => {setNeutral(prevState => prevState + 1)}
  const addBadreview = () => {setBad(prevState => prevState + 1)}


  useEffect(()=> {
    setTotal(good + neutral+ bad )
  }, [bad, good, neutral]) 

  useEffect(() => {
    setPositiveReviews(Math.round(good/total*100)+'%')
  },[good, total]) 
  

  return (
    <div>
    <Section title={"Please leave feedback"}>
    <FeedbackOptions 
    addGoodreview = {addGoodreview}
    addNeutralreview = {addNeutralreview}
    addBadreview = {addBadreview}
    />
    </Section>

    <Section title={"Statistics"}>
    {total ? (
    <Statistics 
    good = {good}
    neutral = {neutral}
    bad = {bad}
    total = {total}
    positivePercentage = {positiveReviews} />) : 
    <Notification message={'There is no feedback'}/>
    }
    </Section>
    </div>
  );

};


