
const timeWord = require('./timeWord');



describe('Testing timing special cases', () => {
  
  test('Testing Noon', async function (){
    
    let time = await timeWord.toEnglish('12:00')
    expect(time).toBe('noon');
  
  });

  test('Testing Midnight', async function (){
    
    let time = await timeWord.toEnglish('00:00')
    expect(time).toBe('midnight');
  
  });

});



describe('Testing Various PM Hours',() => {

  test('12:21 PM', async function(){

    let time = await timeWord.toEnglish('12:21')
    expect(time).toBe('twelve twenty one P.M.');
  })

  test('10:30 PM', async function(){

    let time = await timeWord.toEnglish('22:30')
    expect(time).toBe('ten thirty P.M.');
  })

  test('6:03 PM', async function(){

    let time = await timeWord.toEnglish('18:03')
    expect(time).toBe(`six O'three P.M.`);
  })


})



describe('Testing Various AM Hours',() => {
    
    test('12:21 AM', async function(){
  
      let time = await timeWord.toEnglish('00:21')
      expect(time).toBe('twelve twenty one A.M.');
    })
  
    test('10:30 AM', async function(){
  
      let time = await timeWord.toEnglish('10:30')
      expect(time).toBe('ten thirty A.M.');
    })
  
    test('6:03 AM', async function(){
  
      let time = await timeWord.toEnglish('06:03')
      expect(time).toBe(`six O'three A.M.`);
    })
  

});

