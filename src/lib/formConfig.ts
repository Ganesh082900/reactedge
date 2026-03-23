// lib/formConfig.ts

export const CONTACT_FORM = [
    { type: "text", name: "firstName", label: "First Name", required: true },
    { type: "text", name: "lastName", label: "Last Name", required: true },
    { type: "text", name: "company", label: "Company / Agency", required: true },
    { type: "text", name: "title", label: "Title" },
    { type: "text", name: "subject", label: "Subject", required: true },
    { type: "textarea", name: "message", label: "Message", required: true },
];