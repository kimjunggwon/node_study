process.on('uncaughtException', (err) => {
    console.error('예기치 못한 에러', err);
});
//uncaughtException : 에러 발생 시, 복구 작업 용도 및 에러 로그 기록으로 사용

setInterval(() => {
    throw new Error('서버 에러!');
}, 1000);
//에러 발생

setTimeout(() => {
    console.log('실행');
}, 2000);
//위에서 에러가 발생했지만 uncaughtException으로 인해 실행 가능