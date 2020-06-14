export const lastupdate = (isotimestring) => {
    
    var currenttime = new Date().getTime();
    var timestamp = new Date(isotimestring).getTime();
    var timediffrence = Math.floor((currenttime - timestamp)/60000);

    if (timediffrence > 1 && timediffrence < 60){
        let minutes = Math.floor(timediffrence)
        return minutes + " minutes ago";
    }

    else if (timediffrence === 1){
        let minute = Math.floor(timediffrence)
        return minute + " minute ago"
    }
    else if(timediffrence >= 120 && timediffrence < 1440){
        let hours = Math.floor(timediffrence/60);
        return hours + " hours ago";
    }
    else if (timediffrence >= 60 && timediffrence < 120){
        let hour = Math.floor(timediffrence/60);
        return hour + " hour ago";
    }
    else if (timediffrence >= 1440 && timediffrence < 2880){
        let day = Math.floor(timediffrence/1440);
        return day + " day ago";
    }
    else if (timediffrence > 2880){
        let days = Math.floor(timediffrence/1440);
        return days + " days ago";
    }
}