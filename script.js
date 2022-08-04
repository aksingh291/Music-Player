console.log("welcome to javasscript");

// initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
// let smallIcon = document.getElementsByClassName("songItemPlay");
let songs = [
    {songName: "Let me love you - Justien Bieber", filePath: "songs/1.mp3", coverPath: "covers/cover1.jpg"},
    {songName: "Tum hi ho(Ashiqui2) - Arijit Singh", filePath: "songs/2.mp3", coverPath: "covers/m1.jpg"},
    {songName: "Sathiya(Vivek Oberoi)- A.R Rehman", filePath: "songs/3.mp3", coverPath: "covers/m2.jpg"},
    {songName: "Thumak chalat ram chandra(Ramayan)", filePath: "songs/4.mp3", coverPath: "covers/m3.jpg"},
    {songName: "Baby baby- justien bieber(music)", filePath: "songs/5.mp3", coverPath: "covers/m4.jpg"},
    {songName: "kagaj ki kasti(Gazal) - Jagjit Singh", filePath: "songs/6.mp3", coverPath: "covers/m5.jpg"},
    {songName: "Chhath-Pawan Singh/Palak M", filePath: "songs/7.mp3", coverPath: "covers/m6.jpg"},
    {songName: "7-rings - Ariana Grande(music) ", filePath: "songs/8.mp3", coverPath: "covers/m7.jpg"},
    {songName: "Attention  - Charlie Puth(2017)", filePath: "songs/9.mp3", coverPath: "covers/m8.jpg"},
    {songName: "jism hai to kya(Hindi)-Ali Azmat", filePath: "songs/10.mp3", coverPath: "covers/m9.jpg"},

]

songItems.forEach((element, i) =>{
    element.getElementsByTagName("img")[0].src= songs[i].coverPath ;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})
//audioElement.play(); 
// if((audioElement.currentTime/audioElement.duration)==1)
// {
//     index+=1;
//     audioElement.src = `songs/${index+1}.mp3`;
//     audioElement.currentTime=0;
//     audioElement.play();
//     gif.style.opacity=1;
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
// }

masterPlay.addEventListener('click', (e)=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }

    // if((audioElement.currentTime/audioElement.duration)==1)
    // {
    //     index+=1;
    //     audioElement.src = `songs/${index+1}.mp3`;
    //     audioElement.currentTime=0;
    //     audioElement.play();
    //     gif.style.opacity=1;
    //     masterPlay.classList.remove('fa-play-circle');
    //     masterPlay.classList.add('fa-pause-circle');
    // }

})
// listem to events
audioElement.addEventListener('timeupdate', ()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);   
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100 ;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
       // console.log(e.target.id);
       if(audioElement.paused || audioElement.currentTime<=0){
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${index+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
       }
       
       else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        e.target.classList.remove('fa-pause-circle');
        e.target.classList.add('fa-play-circle');
        gif.style.opacity = 0;
       }


    //    if((audioElement.currentTime/audioElement.duration)==1)
    //    {
    //        index+=1;
    //        audioElement.src = `songs/${index+1}.mp3`;
    //        audioElement.currentTime=0;
    //        audioElement.play();
    //        gif.style.opacity=1;
    //        masterPlay.classList.remove('fa-play-circle');
    //        masterPlay.classList.add('fa-pause-circle');
    //    }


    })
})






document.getElementById('next').addEventListener('click', (e)=> {
    if(index >= 9){
        index = 0;
    }
    else{
        index += 1;
    }
    audioElement.src = `songs/${index+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-Circle');
    masterPlay.classList.add('fa-pause-circle');
    // smallIcon.classList.remove('fa-pause-circle');
    document.getElementById(`${index-1}`).classList.remove('fa-pause-circle');
    document.getElementById(`${index-1}`).classList.add('fa-play-circle');
    document.getElementById(`${index}`).classList.remove('fa-play-circle');
    document.getElementById(`${index}`).classList.add('fa-pause-circle');

    
    //agar gana khataam to

})



document.getElementById('prev').addEventListener('click', (e)=> {
    if(index<=0){
        index = 9;
    }
    else{
        index -= 1;
    }
   
    audioElement.src = `songs/${index+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-Circle');
    masterPlay.classList.add('fa-pause-circle');

    document.getElementById(`${index+1}`).classList.remove('fa-pause-circle');
    document.getElementById(`${index+1}`).classList.add('fa-play-circle');
    document.getElementById(`${index}`).classList.remove('fa-play-circle');
    document.getElementById(`${index}`).classList.add('fa-pause-circle');
    //agar khatam to
    
    // if((audioElement.currentTime/audioElement.duration)==1)
    // {
    //     index+=1;
    //     audioElement.src = `songs/${index+1}.mp3`;
    //     audioElement.currentTime=0;
    //     audioElement.play();
    //     gif.style.opacity=1;
    //     masterPlay.classList.remove('fa-play-circle');
    //     masterPlay.classList.add('fa-pause-circle');
    // }
    
    
})

















