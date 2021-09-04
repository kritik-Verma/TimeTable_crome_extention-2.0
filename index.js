const timetable = document.querySelector(".timetable");
const button = document.querySelector(".button");
const eventsBox = document.querySelector(".eventsBox");
const dayBox = document.querySelector(".day");
const percentBox = document.querySelector(".percent");
const Challenge = document.querySelector(".weekChallenge__items");
const hr = document.querySelector(".hr");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const am = document.querySelector(".am");

const totalSecInDay = 24 * 60 * 60;

const onGoing = " onGoing";
const done = " done";
const eventC = " events";
const week = " week";

const weekChallenges = [
  {
    day: "Monday",
    dayRank: 1,
    data: "events",
  },
  {
    day: "Tuesday",
    dayRank: 2,
    data: "events",
  },
  {
    day: "Wednesday",
    dayRank: 3,
    data: "events",
  },
  {
    day: "Thursday",
    dayRank: 4,
    data: "events",
  },
  {
    day: "Friday",
    dayRank: 5,
    data: "events",
  },
  {
    day: "Saturday",
    dayRank: 6,
    data: "events",
  },
  {
    day: "Sunday",
    dayRank: 0,
    data: "events",
  },
];

const weekEvents = [
  {
    date: "2021-08-27",
    deadline: "at 3pm",
    name: "Viva",
    time: "15",
  },
  {
    date: "2021-09-3",
    deadline: "thermo quiz 3rd or 4th",
    name: "Quiz",
    time: "24",
  },
  {
    date: "2021-09-01",
    deadline: "transport quiz",
    name: "Quiz",
    time: "14",
  },
  {
    date: "2021-09-07",
    deadline: "transport quiz at 2:00 PM to 2:40 PM",
    name: "Quiz",
    time: "24",
  },
];

const links = [
  {
    sub: "MM000",
    Link: "https://google.com",
  },
  {
    sub: "MM000",
    Link: "https://google.com",
  },
  {
    sub: "MM205 lab",
    Link: "https://google.com",
  },
  {
    sub: "MA201",
    Link: "",
  },
];

const data = [
  {
    day: "monday",
    data: [
      { id: "MM201", Link: links[0].Link, time: 9 },
      { id: "MM202", Link: links[1].Link, time: 10 },
      { id: "MA201 tut", Link: "https://example.com", time: 11 },
    ],
  },
  {
    day: "Tuesday",
    data: [
      { id: "MM201", Link: links[0].Link, time: 9 },
      { id: "MM202", Link: links[1].Link, time: 10 },
      {
        id: "MA201 tut",
        Link: "https://google.com ",
        time: 11,
      },
      { id: "MM205 lab", Link: links[2].Link, time: 15 },
    ],
  },
  {
    day: "wednesday",
    data: [
      { id: "MM201 9 BAJE", Link: links[0].Link, time: 9 },
      { id: "MM202 10 BAJE", Link: links[1].Link, time: 10 },
      { id: "MA201 11 BAJE", Link: "http://google.com", time: 11 },
      { id: "MM202 2 BAJE tut", Link: links[1].Link, time: 14 },
      { id: "MM203 3 BAJE", Link: "http://google.com", time: 15 },
      { id: "GE108 4 BAJE", Link: "https://mail.google.com", time: 16 },
    ],
  },
  {
    day: "THURSDAY",
    data: [
      {
        id: "MM204 10 BAJE",
        Link: "https://google.com",
        time: 10,
      },
      { id: "MA201 2 BAJE", Link: "http://google.com", time: 13 },
      { id: "MM203 3 BAJE tut", Link: "http://google.com", time: 15 },
      { id: "GE108 4 BAJE", Link: "http://google.com", time: 16 },
    ],
  },
  {
    day: "friday",
    data: [
      {
        id: "GE109 11 BAJE",
        Link: "https://google.com",
        time: 11,
      },
      { id: "MM203 3 BAJE", Link: "http://google.com", time: 15 },
      { id: "GE108 4 BAJE", Link: "http://google.com", time: 16 },
    ],
  },
  {
    day: "saturday",
    data: [{ id: "Nothing To Show", Link: "", time: new Date().getHours() }],
  },
  {
    day: "sunday",
    data: [{ id: "Nothing To Show", Link: "", time: new Date().getHours() }],
  },
];

// templates
const templateOfDays = `<a
href="  LINK"
target="_blank"
rel="noopener noreferrer"
>
<div class="timetable__items CLASS">
  <div class="timetable__items__content">
    <span class="sub">SUB</span>
    <span class="subtime">TIME</span>
  </div>
  <h4 class="classlink">
    LINK
  </h4>
</div>
</a>`;

const templateOfEvent = `<div class="timetable__items CLASS" style="padding-bottom: 7px;">
<div class="timetable__items__content">
  <span class="sub">NAME</span>
  <span class="subtime">TIME</span>
</div> 
<h5 class="classlink" style="text-align: right;">
DATE
</h5>
</div>`;

const templateOfWeekChallenge = ` <div class="timetable__items__content" style="padding-bottom: 5px; margin-bottom: 6px; transition: none;" >
<span class="sub ">DAY</span>
<span class="subtime ">DATA</span>
</div>`;

// FUNCTIONS

const getTimePercent = (hr, min) => {
  const totalSec = hr * 60 * 60 + min * 60;
  return (totalSec / totalSecInDay) * 100;
};

const myFunction = (data, quiz) => {
  const date = new Date().getDay();
  let work;
  let day;
  switch (date) {
    case 1:
      work = data[0];
      break;
    case 2:
      work = data[1];
      break;
    case 3:
      work = data[2];
      break;
    case 4:
      work = data[3];
      break;
    case 5:
      work = data[4];
      break;
    case 6:
      work = data[5];
      break;
    case 0:
      work = data[6];
      break;
  }

  day = work.day;
  dayBox.innerHTML = `<h1>${day}</h1>`;
  const final = [];
  work.data.forEach((el) => {
    final.push(container(el));
  });

  const timeTableData = final.join(" ");
  return { timeTableData, day };
};

function container(el) {
  let template = templateOfDays;

  template = template.replace(/SUB/, el.id);
  template = template.replace(/LINK/g, el.Link);
  template = template.replace(
    /TIME/g,
    `${el.time < 12 ? el.time + ":AM" : el.time - 12 + ":PM"}`
  );
  if (new Date().getHours() > el.time) {
    template = template.replace(/CLASS/g, done);
  } else if (new Date().getHours() == el.time) {
    template = template.replace(/CLASS/g, onGoing);
  } else {
    template = template.replace(/CLASS/g, " ");
  }

  return template;
}

function events(weekEvents) {
  const week = new Date();
  const event = [];
  week.setDate(week.getDate() + 7);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  weekEvents.map((el) => {
    const eventDate = new Date(
      `${el.date} ${el.time < 24 ? el.time * 1 + 1 : "00"}:00:00`
    );

    if (
      week.getTime() >= eventDate.getTime() &&
      eventDate.getTime() >= Date.now()
    ) {
      let template = templateOfEvent;
      template = template.replace(/NAME/, el.name);
      template = template.replace(/TIME/, el.deadline ? el.deadline : "");
      template = template.replace(
        /DATE/,
        `${
          eventDate.getDay() != new Date().getDay()
            ? days[eventDate.getDay()]
            : "Today"
        } ${el.date} @${el.time > 12 ? el.time - 12 + "PM" : el.time + "AM"}`
      );
      if (el.date.split("-")[2] * 1 === new Date().getDate()) {
        template = template.replace("CLASS", "ongoingEvents");
      } else {
        template = template.replace("CLASS", "");
      }

      event.push(template);
    }
  });

  if (!event.length) {
    let template = templateOfEvent;
    template = template.replace(/NAME/, "NO EVENTS THIS WEEK");
    template = template.replace(/TIME/, "");
    event.push(template);
  }

  eventsBox.innerHTML = event.join(" ");
}

function weekChallenge(weekChallenges) {
  const data = [];
  weekChallenges.map((el) => {
    let template = templateOfWeekChallenge;
    if (el.dayRank >= new Date().getDay()) {
      template = template.replace(/DAY/, el.day);
      template = template.replace(/DATA/, el.data);
      template = template.replace(/CLASS/);
    } else if (el.dayRank <= new Date().getDay()) {
      template = template.replace(/DAY/, el.day);
      template = template.replace(/DATA/, el.data);
      template = template.replace(/CLASS/, " ");
    }
    data.push(template);
  });
  Challenge.innerHTML = data.join(" ");
}

function print() {
  const content = myFunction(data);

  const timePercent =
    Math.round(
      (100 - getTimePercent(new Date().getHours(), new Date().getMinutes())) *
        10
    ) / 10;

  percentBox.innerHTML = `${timePercent}%`;
  timetable.innerHTML = content.timeTableData;

  hr.innerHTML = `${
    new Date().getHours() > 12
      ? new Date().getHours() - 12
      : new Date().getHours()
  } :&ThinSpace;`;
  min.innerHTML = `${new Date().getMinutes()} :&ThinSpace;`;

  sec.innerHTML = `${new Date().getSeconds()} &ThinSpace;`;
  am.innerHTML = new Date().getHours() > 12 ? "pm" : "am";
}

setInterval(() => {
  min.innerHTML = `${new Date().getMinutes()} :&ThinSpace;`;
  sec.innerHTML = `${new Date().getSeconds()} &ThinSpace;`;
}, 1000);

weekChallenge(weekChallenges);
events(weekEvents);
print();
