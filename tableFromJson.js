/*
let tableFromJson = () => {
        // the json data.
        const myMailingList =


            [{
                    "LastName": "St. James",
                    "Email": "Jonathan.2039@mmail.com",
                    " Position": "Telephonist",
                    "JoinedDate": "28/10/2021"
                },
                {
                    "LastName": "Evan",
                    "Email": "dpriceeeeee@mac.com",
                    " Position": "Counsellor",
                    "JoinedDate": "9/3/2020"
                },
                {
                    "LastName": "Ashley",
                    "Email": "bogjobber@icloud.com",
                    " Position": "Telephonist",
                    "JoinedDate": "23/2/2022"
                },
                {
                    "LastName": "Raven",
                    "Email": "Javischarlotteee@mmail.com",
                    " Position": "Telephonist",
                    "JoinedDate": "19/3/2021"
                },
                {
                    "LastName": "Cromwell",
                    "Email": "maikelnai@att.net",
                    " Position": "Psychotherapist",
                    "JoinedDate": "2/7/2020"
                },
                {
                    "LastName": "Monroe",
                    "Email": "drjlaw@aol.com",
                    " Position": "Telephonist",
                    "JoinedDate": "18/4/2020"
                },
                {
                    "LastName": "Scollop",
                    "Email": "Scoolopanff@mmail.com",
                    " Position": "Psychotherapist",
                    "JoinedDate": "20/5/2022"
                },
                {
                    "LastName": "Marley",
                    "Email": "jsbach@outlook.com",
                    " Position": "Telephonist",
                    "JoinedDate": "19/8/2020"
                },
                {
                    "LastName": "West",
                    "Email": "eminence@sbcglobal.net",
                    " Position": "Psychotherapist",
                    "JoinedDate": "21/9/2022"
                },
                {
                    "LastName": "Ellis",
                    "Email": "lbaxter@optonline.net",
                    " Position": "Telephonist",
                    "JoinedDate": "9/11/2020"
                },
                {
                    "LastName": "Allen",
                    "Email": "nimaclea@gmail.com",
                    " Position": "Psychotherapist",
                    "JoinedDate": "2/12/2022"
                },
                {
                    "LastName": "Huxley",
                    "Email": "graham@gmail.com",
                    " Position": "Counsellor",
                    "JoinedDate": "2/12/2020"
                },
                {
                    "LastName": "Lopez",
                    "Email": "jeffcovey@icloud.com",
                    " Position": "Telephonist",
                    "JoinedDate": "20/6/2022"
                },
                {
                    "LastName": "Miller",
                    "Email": "ilikered@verizon.net",
                    " Position": "Telephonist",
                    "JoinedDate": "18/4/2020"
                },
                {
                    "LastName": "Davis",
                    "Email": "rgarcia@icloud.com",
                    " Position": "Psychotherapist",
                    "JoinedDate": "20/5/2022"
                },
                {
                    "LastName": "Garcia",
                    "Email": "hmbrand@yahoo.com",
                    " Position": "Telephonist",
                    "JoinedDate": "19/10/2020"
                },
                {
                    "LastName": "Brown",
                    "Email": "hnaoya@msn.com",
                    " Position": "Psychotherapist",
                    "JoinedDate": "21/3/2022"
                },
                {
                    "LastName": "Williams",
                    "Email": "srour@yahoo.ca",
                    " Position": "Telephonist",
                    "JoinedDate": "29/1/2020"
                },
                {
                    "LastName": "John",
                    "Email": "sekiya@outlook.com",
                    " Position": "Counsellor",
                    "JoinedDate": "18/2/2022"
                },
                {
                    "LastName": "Andrew",
                    "Email": "nicktrig@verizon.net",
                    " Position": "Psychotherapist",
                    "JoinedDate": "27/6/2021"
                },
                {
                    "LastName": "Wilson",
                    "Email": "wiseb@optonline.net",
                    " Position": "Telephonist",
                    "JoinedDate": "3/8/2020"
                },
                {
                    "LastName": "Thomas",
                    "Email": "sthomas@icloud.com",
                    " Position": "Psychotherapist",
                    "JoinedDate": "26/8/2021"
                },
                {
                    "LastName": "Moore",
                    "Email": "lbaxter@optonline.net",
                    " Position": "Telephonist",
                    "JoinedDate": "9/11/2020"
                },
                {
                    "LastName": "Perez",
                    "Email": "kildjean@verizon.net",
                    " Position": "Counsellor",
                    "JoinedDate": "10/4/2020"
                },
                {
                    "LastName": "Murty",
                    "Email": "murty@verizon.net",
                    " Position": "Psychotherapist",
                    "JoinedDate": "14/5/2022"
                },
                {
                    "LastName": "Marley",
                    "Email": "dmiller@yahoo.com",
                    " Position": "Telephonist",
                    "JoinedDate": "28/8/2020"
                },
                {
                    "LastName": "Havyn",
                    "Email": "prhavyn@yahoo.ca",
                    " Position": "Psychotherapist",
                    "JoinedDate": "30/9/2022"
                },
                {
                    "LastName": "Luk",
                    "Email": "lukka@att.net",
                    " Position": "Telephonist",
                    "JoinedDate": "1/11/2020"
                },
                {
                    "LastName": "Harris",
                    "Email": "warrior@mac.com",
                    " Position": "Telephonist",
                    "JoinedDate": "8/4/2020"
                },
                {
                    "LastName": "Shang",
                    "Email": "shang@outlook.com",
                    " Position": "Psychotherapist",
                    "JoinedDate": "17/3/2022"
                },
                {
                    "LastName": "clark",
                    "Email": "jsbach@outlook.com",
                    " Position": "Telephonist",
                    "JoinedDate": "12/6/2020"
                },
                {
                    "LastName": "Robinson",
                    "Email": "ekonit@hotmail.com",
                    " Position": "Psychotherapist",
                    "JoinedDate": "31/8/2021"
                },
                {
                    "LastName": "Louis",
                    "Email": "offthelip@optonline.net",
                    " Position": "Telephonist",
                    "JoinedDate": "9/1/2020"
                }
            ]

        // Extract value from table StaffRecordHeader. 
        // ("LastName", "Email", " Position" and "JoinedDate")
        let col = [];
        for (let i = 0; i < myMailingList.length; i++) {
            for (let key in myMailingList[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create table.
        const table = document.createElement("table");

        // Create table StaffRecordHeader row using the extracted StaffRecordHeaders above.
        let tr = table.insertRow(-1); // table row.

        for (let i = 0; i < col.length; i++) {
            let th = document.createElement("th"); // table StaffRecordHeader.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (let i = 0; i < myMailingList.length; i++) {

            tr = table.insertRow(-1);

            for (let j = 0; j < col.length; j++) {
                let tabCell = tr.insertCell(-1);
                tabCell.innerHTML = myMailingList[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        const divStaffData = document.getElementById("StaffData");
        divStaffData.innerHTML = "";
        divStaffData.appendChild(table);
    }
    // code copy

StaffListBtn.addEventListener("click", () => {
    let close = document.getElementById("StaffData");
    if (close.classList.contains("d-none")) {
        (close.classList.remove("d-none"));
    } else {
        close.classList.add("d-none");
    }
});

*/