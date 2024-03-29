
import { v4 as uuidv4 } from "uuid";
import moment from "moment-timezone";

import Profile1 from "assets/img/team/profile-picture-1.jpg"
import Profile2 from "assets/img/team/profile-picture-2.jpg"
import Profile3 from "assets/img/team/profile-picture-3.jpg"
import Profile4 from "assets/img/team/profile-picture-4.jpg"

export default [
    {
        "id": uuidv4(),
        "image": Profile1,
        "phone": 74999990000,
        "status": "active",
        "name": "Roy Fendley",
        "email": "example@themesberg.com",
        "dateCreated": moment().format("DD MMM YYYY"),
    },
    {
        "id": uuidv4(),
        "image": Profile3,
        "phone": 74999990000,
        "status": "active",
        "name": "Bonnie Green",
        "email": "example@themesberg.com",
        "dateCreated": moment().subtract(2, "days").format("DD MMM YYYY"),
    },
    {
        "id": uuidv4(),
        "phone": 74999990000,
        "status": "active",
        "name": "Scott Anderson",
        "email": "example@themesberg.com",
        "dateCreated": moment().subtract(2, "days").format("DD MMM YYYY"),
    },
    {
        "id": uuidv4(),
        "phone": 74999990000,
        "status": "active",
        "image": Profile4,
        "name": "Ronnie Buchanan",
        "email": "example@themesberg.com",
        "dateCreated": moment().subtract(3, "days").format("DD MMM YYYY"),
    },
    {
        "id": uuidv4(),
        "phone": 749885548768,
        "status": "inactive",
        "image": Profile3,
        "name": "Jane Rinehart",
        "email": "example@themesberg.com",
        "dateCreated": moment().subtract(4, "days").format("DD MMM YYYY"),
    },
    {
        "id": uuidv4(),
        "phone": 749885548768,
        "status": "pending",
        "name": "William Ginther",
        "email": "example@themesberg.com",
        "dateCreated": moment().subtract(5, "days").format("DD MMM YYYY"),
    },
    {
        "id": uuidv4(),
        "image": Profile2,
        "phone": 749885548768,
        "status": "pending",
        "name": "George Driskell",
        "email": "example@themesberg.com",
        "dateCreated": moment().subtract(5, "days").format("DD MMM YYYY"),
    },
    {
        "id": uuidv4(),
        "image": Profile4,
        "phone": 749885548768,
        "status": "suspended",
        "name": "Ronnie Buchanan",
        "email": "example@themesberg.com",
        "dateCreated": moment().subtract(5, "days").format("DD MMM YYYY"),
    },
    {
        "id": uuidv4(),
        "phone": 749885548768,
        "status": "suspended",
        "name": "Jane Rinehart",
        "email": "example@themesberg.com",
        "dateCreated": moment().subtract(6, "days").format("DD MMM YYYY"),
    }
]