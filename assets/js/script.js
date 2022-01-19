const projects = [
    {
        type: 'normal',
        name: 'Random Password Generator',
        description: "Enabling javasScript, you are able to answer prompt to best suit your random password specifications",
        screenshotLink: 'https://user-images.githubusercontent.com/88990996/135732556-49b83e48-33c3-4070-a697-68d75802f8eb.png',
        repoLink: 'https://github.com/neex18/PasswordGeneratorHW',
        liveLink: 'https://neex18.github.io/PasswordGeneratorHW/',
    },
    {
        type: 'normal',
        name: 'Weather Dashboard',
        description: "Showcases ability to incorporate and a third party API",
        screenshotLink: 'https://user-images.githubusercontent.com/88990996/147720952-776a8358-9ab8-4fcb-bd04-bb11d1bd8247.png',
        repoLink: 'https://github.com/neex18/WeatherAPI',
        liveLink: 'https://neex18.github.io/WeatherAPI/',
    },

    {
        type: 'normal',
        name: 'Work Day Scheduler',
        description: "This is a day planner utilizing Bootstrap, JQUERY, and 3rd-party APIs.",
        screenshotLink: 'https://user-images.githubusercontent.com/88990996/147713804-e1e2b912-c033-458a-acf5-9c60daad2ce4.png',
        repoLink: 'https://github.com/neex18/WorkDayScheduler',
        liveLink: 'https://neex18.github.io/WorkDayScheduler/',
    },
    {
        type: 'featured',
        name: 'Wine Cellar Tracker',
        description: "Create a user profile that you will need to login into to gain access, email will be sent user to confirming user name / email. Once you are allowed access, you are able to list your wine inventory to your profile We are able to update bottles of wine, delete bottles, and change quantities. Each bottle has specific inventory location",
        screenshotLink: 'https://raw.githubusercontent.com/JustinM099/wine-cellar-tracker/main/public/images/Login.png',
        repoLink: 'https://github.com/JustinM099/wine-cellar-tracker',
        liveLink: 'https://bottles-db.herokuapp.com/login'
    },
];

// Add more projects later, or change feature project in the future with this for loop
for (let i = 0; i < projects.length; i++) {
    if (projects[i].type === 'featured') {
        $("#featuredImg").attr("src", projects[i].screenshotLink);
        $("#featuredTitle").text(projects[i].name);
        $("#featuredDescription").text(projects[i].description);
        $("#featuredRepoLink").attr("href", projects[i].repoLink);
        $("#featuredLiveLink").attr("href", projects[i].liveLink);
    } else {
        let divEl = $("<div>").addClass('card text-center');
        let imgEl = $("<img>").addClass('card-img-top');
        imgEl.attr("src", projects[i].screenshotLink);
        let divEl2 = $("<div>").addClass("card-body");
        let h5El = $("<h5>").addClass("card-title");
        h5El.text(projects[i].name);
        let pEl = $("<p>").addClass("card-text");
        pEl.text(projects[i].description);
        let divEl3 = $("<div>").addClass("btnDiv");
        let aEl = $("<a>").addClass("btn btn-secondary");
        aEl.attr("href", projects[i].repoLink);
        aEl.text("Link to Repo");
        let aEl2 = $("<a>").addClass("btn btn-secondary");
        aEl2.attr("href", projects[i].liveLink);
        aEl2.text("Link to Site");
        $("#otherProjects").append(divEl)
        divEl.append(imgEl);
        divEl.append(divEl2);
        divEl2.append(h5El);
        divEl2.append(pEl);
        divEl2.append(divEl3);
        divEl3.append(aEl);
        divEl3.append(aEl2);
    }
}
$(".btn-secondary").attr('target', '_blank');