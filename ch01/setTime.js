setTimeout(() => {
    console.log('LLLLL');
}, 10000);
for (let i = 0; i < 100000; i++) {
    const element = 100000;
    console.log(i);
    
} // 10 sec
// api call with take 2 sec to complete print 'JJJJJJ'

for (let i = 0; i < 100000; i++) {
    const element = 100000;
    console.log(i);

} // 10 sec

