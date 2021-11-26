

class timeWord {


    static async AMorPM(hr,min)
    {
        let time = hr+min
        
        let AmPm;
        let specialCases; 

        if(time >= '0000')
        {
            AmPm = 'A.M.'
        }
        if(time >= 1200)
        {
            AmPm = 'P.M.'
        }

        if(time == '0000')
        {
            specialCases = 'midnight'
        }

        if(time == 1200)
        {
            specialCases =  'noon'
        }

        return {specialCases, AmPm};

    }

    static async Hour(hr)
    {

     
        if (hr == '00')
        {
            return 'twelve'
        } 

        let idx = Number(hr)-1

        
        let hours = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','one','two','three','four','five','six','seven','eight','nine','ten','eleven','tweleve']
        
        
        let answer = hours[idx]
        
        return answer

    }

    static async Minute(min)
    {

        let tens = min.slice(0,1)
        let ones = min.slice(1,2)


        let tensTranslation;
        let onesTranslation;
        let final;

        const oneToTeensDict = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
        

        
        if(min <= 9)
        {
            onesTranslation = oneToTeensDict[min-1]
            final = "O'"+onesTranslation
        }

        else if( min > 10 && min <= 19)
        {
            final = oneToTeensDict[min-1]
        }
        else
        {
            onesTranslation = oneToTeensDict[ones-1]
        }
        
        
        if(tens == 2)
        {
            tensTranslation = 'twenty' 
        }
        if(tens == 3)
        {
            tensTranslation = 'thirty' 
        }
        if(tens == 4)
        {
            tensTranslation = 'forty'  
        }
        if(tens == 5)
        {
            tensTranslation = 'fifty' 
        }

        

        if(tensTranslation && ones != 0)
        {
            final = `${tensTranslation} ${onesTranslation}`
        }

        if(tensTranslation && ones == 0)
        {
            final = tensTranslation
        }

        return final 
        
        
    }

    static async toEnglish(time)
    {   

        let hr = time.slice(0,2)
        let min = time.slice(3,)

        let {specialCases, AmPm} = await this.AMorPM(hr,min);

    
        let hour = await this.Hour(hr);


        
        let minute = await this.Minute(min);


        let final;


        if (specialCases)
        {
            final = specialCases
        }
        else
        {
            final = `${hour} ${minute} ${AmPm}`
        }

        return final
    
    }



}

module.exports = timeWord;