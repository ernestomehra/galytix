export const homePage = {
    heading: "h1", 
    firstJob: ":nth-child(1) > a > .title",
}

export const jobDetails = {
    applyBtn: "button",
    applyNowForm: ".applyNowForm",
    applyFormFields: {
        firstName: ":nth-child(1) > .form-control",
        lastName: ":nth-child(2) > .form-control",
        uploadResume: ".form-control-file",
        submit: ".ml-auto > button",
        successmsg: '.success'
    },
    detailRoleDesc: "app-job > :nth-child(4)",
    desiredSkills: "app-job > :nth-child(6)",
    benefits: "app-job > :nth-child(8)"
    
}

