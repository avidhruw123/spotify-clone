console.log("Welcome to Spotify");

//intialize the variables
let audioElement = new Audio('songs/1.mp3');
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));




let songs = [
    {songName: "Warriyo - Mortals ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE -", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "industry", filePath: "songs/4.mp3", coverPath: "covers/6.jpg"},
    {songName: "starboy", filePath: "songs/1.mp3", coverPath: "covers/7.jpg"},
    {songName: "as it was", filePath: "songs/3.mp3", coverPath: "covers/8.jpg"},
    {songName: "in the stars", filePath: "songs/5.mp3", coverPath: "covers/9.jpg"},
    {songName: "moonrise", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]



songItems.forEach((element,i)=>{
    // console.log(element, i);
    
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;   
    

})

//handling play pause 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

/// duration of songs
audioElement.addEventListener("timeupdate", ()=>{

    let duration = audioElement.currentTime;
    let min = Math.floor(duration / 60);
    let sec = Math.floor(duration % 60);

 let minString = min < 10 ? "0" + min : min;
let secString = sec < 10 ? "0" + sec : sec;
document.getElementById('time').innerHTML = `${minString}:${secString}`;

})



//seekbar
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('time update');
    //we are finding the percentage    
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress; 
   
})



myProgressBar.addEventListener('change',()=>{
    //we are finding here current time 
    let duration =0;
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100 ;
    // duration= audioElement.currentTime;
    // document.getElementById('duration').innerText= duration;
})


const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');        
    })
}




Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

    element.addEventListener('click',(e)=>{
        makeAllPlays();   
                  
        songIndex = parseInt(e.target.id); 
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
       
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})






document.getElementById('next').addEventListener('click', ()=>{

    if(songIndex>=9){
        songIndex = 0
    }else{
        songIndex +=1;
    }   
    
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-cirlce'); 
})



document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <=0){
        songIndex = 0
    }else{
        songIndex -=1;
    }   
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-cirlce');

})




