return (
   <div className="app">
      {currentQuestion === null ? (
         <LoadingScreen />
      ) : (
         <div>
            <h1>Country Quiz</h1>
            <Card>
               {counter === 0 ? (
                  <Results score={score} />
               ) : (
                  <Quiz
                     currentQuestion={currentQuestion}
                     score={score}
                     setScore={setScore}
                     counter={counter}
                     setCounter={setCounter}
                     fetchNextData={fetchNextData}
                     reveal={reveal}
                     setReveal={setReveal}
                  />
               )}
               <Button
                  nextQuestion={nextQuestion}
                  setCurrentQuestion={setCurrentQuestion}
                  setReveal={setReveal}
               />
            </Card>
         </div>
      )}
   </div>
);