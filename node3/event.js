const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.addListener('event1', () => {
    console.log('이벤트1');
});
myEvent.on('event2', () => {
    console.log('이벤트2');
});
myEvent.on('event2', () => {
    console.log('이벤트2 추가');
});
myEvent.once('event3', () => {
    console.log('이벤트3');
});

myEvent.emit('event1');
//이벤트 실행
myEvent.emit('event2');
//이벤트 실행

myEvent.emit('event3');
myEvent.emit('event3');
//이벤트가 실행하지만 한 번만 실행

myEvent.on('event4', () => {
    console.log('이벤트4');
});

myEvent.removeAllListeners('event4');
myEvent.emit('event4');
//이벤트 실행 종료

const listener = () => {
    console.log('이벤트5');
}

myEvent.on('event5', listener);
myEvent.removeListener('event5', listener);
myEvent.emit('event5');
//이벤트 실행 종료

console.log(myEvent.listenerCount('event2'));
//event2에 대한 이벤트 리스너 개수