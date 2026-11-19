/* =====================================================================
   IDVA GRADUATION REQUIREMENTS  —  the only file you need to edit.
   ---------------------------------------------------------------------
   Open this file in any text editor (Notepad, TextEdit). Change the
   words or numbers inside the quotation marks, save, and upload the
   file again (see UPDATING.md). Do not remove quotes, commas, or brackets.

   Source: Idaho State Department of Education, "High School Graduation
   Minimum Requirements" (IDAPA 08.02.03.104-106), updated 01/14/2026.
   IDVA follows the state minimums; confirm any IDVA-specific course
   names with your counselors before relying on the course lists below.
   ===================================================================== */
window.IDVA_REQUIREMENTS = {

  lastReviewed: "November 2026",
  totalCredits: 46,

  /* Graduating classes shown in the Class dropdown */
  classes: [2025, 2026, 2027, 2028, 2029, 2030, 2031],
  defaultClass: 2027,

  /* Schools the admin team can switch between */
  schools: [
    { key:"IDVA", name:"Idaho Virtual Academy", short:"IDVA" },
    { key:"ISID", name:"Insight School of Idaho", short:"ISID" }
  ],
  defaultSchool: "IDVA",

  /* State rule: Digital Literacy applies to students graduating after Jan 1, 2028,
     and the Future Readiness Project replaces the Senior Project for the Class of 2028+.
     Earlier classes keep 17 electives and the Senior Project. */
  digitalLiteracyFirstClass: 2028,
  futureReadinessFirstClass: 2028,

  links: {
    idva: "https://idva.k12.com/",
    idvaGraduationPlanning: "https://idva.k12.com/academics/graduation-planning/",
    stateRequirements: "https://www.sde.idaho.gov/high-school-graduation-requirements/"
  },

  /* Credit panels. One row = 1 credit (one semester course).
       { t:"English 9", sem:"S1" }                      -> a checkbox
       { t:"Math elective", options:[ ... ] }           -> a dropdown + checkbox
     Panels with  fill:"remaining"  take whatever credits are left to reach 46. */
  panels: [
    { id:"ela", col:1, title:"English Language Arts", credits:8,
      source:"IDAPA 08.02.03.105 — Language Arts 8",
      rows:[
        {t:"English 9",sem:"S1"},{t:"English 9",sem:"S2"},
        {t:"English 10",sem:"S1"},{t:"English 10",sem:"S2"},
        {t:"English 11",sem:"S1"},{t:"English 11",sem:"S2"},
        {t:"English 12",sem:"S1"},{t:"English 12",sem:"S2"}
      ]},

    { id:"math", col:1, title:"Mathematics", credits:6,
      source:"Math 6: 2 Algebra I (or equivalent), 2 Geometry (or equivalent), 2 of the student's choice",
      rows:[
        {t:"Algebra I",sem:"S1"},{t:"Algebra I",sem:"S2"},
        {t:"Geometry",sem:"S1"},{t:"Geometry",sem:"S2"},
        {t:"Math elective", options:["Algebra II","Integrated Math III","Pre-Calculus","Trigonometry","Statistics","Calculus","Financial Math","Computer Science (counts once, as math OR science)","Other"]},
        {t:"Math elective", options:["Algebra II","Integrated Math III","Pre-Calculus","Trigonometry","Statistics","Calculus","Financial Math","Computer Science (counts once, as math OR science)","Other"]}
      ]},

    { id:"science", col:1, title:"Science", credits:6,
      source:"Science 6: 4 credits from at least two of physics, chemistry, earth & space, life science; 2 more from applied science, engineering, computer science or those areas",
      rows:[
        {t:"Science course", options:["Biology","Chemistry","Physics","Earth & Space Science","Environmental Science","Anatomy & Physiology","Applied Science","Engineering","Computer Science (counts once, as math OR science)","Other"]},
        {t:"Science course", options:["Biology","Chemistry","Physics","Earth & Space Science","Environmental Science","Anatomy & Physiology","Applied Science","Engineering","Computer Science (counts once, as math OR science)","Other"]},
        {t:"Science course", options:["Biology","Chemistry","Physics","Earth & Space Science","Environmental Science","Anatomy & Physiology","Applied Science","Engineering","Computer Science (counts once, as math OR science)","Other"]},
        {t:"Science course", options:["Biology","Chemistry","Physics","Earth & Space Science","Environmental Science","Anatomy & Physiology","Applied Science","Engineering","Computer Science (counts once, as math OR science)","Other"]},
        {t:"Science course", options:["Biology","Chemistry","Physics","Earth & Space Science","Environmental Science","Anatomy & Physiology","Applied Science","Engineering","Computer Science (counts once, as math OR science)","Other"]},
        {t:"Science course", options:["Biology","Chemistry","Physics","Earth & Space Science","Environmental Science","Anatomy & Physiology","Applied Science","Engineering","Computer Science (counts once, as math OR science)","Other"]}
      ]},

    { id:"social", col:1, title:"Social Studies", credits:5,
      source:"Social Studies 5: 2 Government, 2 U.S. History, 1 Economics & Financial Literacy. Geography, sociology, psychology and world history are electives, not Social Studies.",
      rows:[
        {t:"U.S. History",sem:"S1"},{t:"U.S. History",sem:"S2"},
        {t:"U.S. Government",sem:"S1"},{t:"U.S. Government",sem:"S2"},
        {t:"Economics & Financial Literacy"}
      ]},

    { id:"arts", col:2, title:"Fine Arts / World Language / Humanities", credits:2,
      source:"2 credits: visual arts, music, theatre, dance, world languages, or approved humanities",
      rows:[
        {t:"Fine arts, world language or humanities", options:["Art","Music","Theatre","Dance","World Language I","World Language II","Humanities","Other"]},
        {t:"Fine arts, world language or humanities", options:["Art","Music","Theatre","Dance","World Language I","World Language II","Humanities","Other"]}
      ]},

    { id:"health", col:2, title:"Health / Wellness", credits:1,
      source:"Health 1: must include hands-on CPR training (with AED use)",
      rows:[ {t:"Health / Wellness (includes CPR & AED)"} ]},

    { id:"speech", col:2, title:"Communication Arts (Speech)", credits:1,
      source:"Speech 1: speech course, debate course, or equivalent sequence of activities",
      rows:[ {t:"Speech / Communication Arts"} ]},

    { id:"digital", col:2, title:"Digital Literacy", credits:1, minClass:2028,
      source:"Digital Literacy 1: required for students graduating after January 1, 2028",
      rows:[ {t:"Digital Literacy"} ]},

    { id:"electives", col:2, title:"Electives", fill:"remaining",
      source:"16 electives (17 for classes before 2028), aligned to the student's Career Pathway Plan" }
  ],

  /* Check-off items that carry no credit */
  additional: [
    { t:"Career Pathway Plan on file (parent-approved, reviewed yearly)" },
    { t:"Senior Project", maxClass:2027 },
    { t:"Future Readiness Project (incl. experiential component)", minClass:2028 },
    { t:"Civics test passed" },
    { t:"U.S. Government & History course on transcript" }
  ],

  /* State requires every high school to offer at least one of these */
  advanced: [
    "Dual credit course",
    "Advanced Placement (AP)",
    "Micro-credential",
    "International Baccalaureate (IB)",
    "Career technical (CTE) course or credential"
  ],

  postSecondaryGoals: ["Four-year college","Two-year college / certificate","Career technical training","Workforce","Military","Undecided"]
};
