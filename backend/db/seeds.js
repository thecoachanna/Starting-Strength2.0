require('./connection')

const Exercise = require('../models/Exercise')

const exercise = [
    {
        name: 'Side-lying Shoulder Sweeps',
        video: 'https://www.youtube.com/embed/fnttFXC2Bnk',
        cues: '- squeeze fist in between knees - aim for hand to touch the floor for the full range of motion - arm staying straight'        
    },
    {
        name: 'Hip Openers',
        video: 'https://www.youtube.com/embed/CZ9dE3XZC-0',
        cues: '- without lifting forward leg - raise back knee as high as you can towards the ceiling'        
    },
    {
        name: '90/90 Hip Transitions',
        video: 'https://www.youtube.com/embed/TGzO3pQuklo',
        cues: '- try to keep knees as far apart as possible while staying upright'        
    },
    {
        name: '90/90 Hip Lift',
        video: 'https://www.youtube.com/embed/__X37Fq7I8E',
        cues: '- act as if feet are glued to the wall and you are trying to pull them down'        
    },
    {
        name: 'Hollow Body Hold',
        video: 'https://www.youtube.com/embed/N6qpoy5vr6Y',
        cues: '- start with knees over hips, then gradually straighten them to increase difficulty - low back should stay rounded into the ground'        
    },
    {
        name: 'Goblet Squat',
        video: 'https://www.youtube.com/embed/1BMJQmWclvo',
        cues: '- let knees go forward - butt down - while staying as upright as possible'        
    },
    {
        name: 'Single-arm Bench Press',
        video: 'https://www.youtube.com/embed/yH3GurKIsFA',
        cues: '- use other hand as needed to guide dumbbell down - elbow/arm should make an arrow shape with your body, not a "T"'        
    },
    {
        name: 'Machine Leg Extension',
        video: 'https://www.youtube.com/embed/qk04uz_oR6o',
        cues: 'avoid arching through back - legs should be almost locked out at the top'        
    },
    {
        name: 'Dumbbell Incline Squeeze Press',
        video: 'https://www.youtube.com/embed/LTONLIx-AVM',
        cues: '- keep wrists neutral while squeezing dumbbells together for the duration of movement'        
    },
    {
        name: 'Bicep Curls',
        video: 'https://www.youtube.com/embed/zM844FaSXNo',
        cues: '- palms face you at the top - try to keep elbows tight to body '        
    },
    {
        name: 'Banded Leg Drop',
        video: 'https://www.youtube.com/embed/vQeQyo_Cbnc',
        cues: '- only go as low as you can keep your low back rounded into the floor - static leg should stay at hip level'        
    },
    {
        name: 'RFOW Single-leg Deadlift',
        video: 'https://www.youtube.com/embed/HUGS-fpoNc0',
        cues: '- hips go straight back - slight bend of knee and flat back'        
    },
    {
        name: 'Dumbbell Bench Row',
        video: 'https://www.youtube.com/embed/7Jfvcu6acvE',
        cues: '- drive elbows towards your back pocket - wrist stays relaxed and neutral - back flat - straight arm should be actively pushing you away from the bench/not sagging into shoulder blade'        
    },
    {
        name: 'Lying Leg Curl',
        video: 'https://www.youtube.com/embed/Yr5uSu9JMSE',
        cues: '- try to avoid arching through back'        
    },
    {
        name: 'Shoulder Protraction to Lat Pulldown',
        video: 'https://www.youtube.com/embed/kwkCvjW7bYM',
        cues: '- pull shoulders down with straight arms first, then pull bar to the top of your chest'        
    },
    {
        name: 'Cable Tricep Extension',
        video: 'https://www.youtube.com/embed/njZO3hmKYLY',
        cues: '- keeping wrists straight, pull rope apart at hips - keep elbows tucked in at sides'        
    },
    {
        name: 'Tall Kneeling Swimmers',
        video: 'https://www.youtube.com/embed/vyjLMi2YoVM',
        cues: '- arms will go as far back as you can without raising chest/arching through back'        
    },
    {
        name: 'Wall Assisted Adductor Rockback w/ T-spine Rotation + Reach',
        video: 'https://www.youtube.com/embed/VFNbvsOphwQ',
        cues: ''        
    },
    {
        name: 'Lateral Lunge',
        video: 'https://www.youtube.com/embed/zVC4RJ4Ceo8',
        cues: '- act as if sitting back into a chair - knee and toes should be facing straight ahead on both legs'        
    },
    {
        name: 'Half-kneeling Dumbbell Overhead Press',
        video: 'https://www.youtube.com/embed/6dUYZixbbZM',
        cues: '- press weight straight overhead - avoid arching through back or lifting chest'        
    },
    {
        name: 'Foam Roll Deadbug ISO',
        video: 'https://www.youtube.com/embed/81pDLkcO6lc',
        cues: '- squish foam roller between fully lengthened arms and bent knees - back should be rounded into the floor'        
    },
    {
        name: 'Standing Lateral Raises',
        video: 'https://www.youtube.com/embed/Z8tEGK27Gck',
        cues: '- with slight bend of elbow, raise arms to just above shoulder level'        
    },
    {
        name: 'Dumbbell Step-ups',
        video: 'https://www.youtube.com/embed/B0HCrmRNyc8',
        cues: '- pick a manageable height where you dont have to push off your back foot - control on the way down'        
    },
    {
        name: 'Modified Side Plank ISO',
        video: 'https://www.youtube.com/embed/AeSzyepGWvM',
        cues: '- keep elbow underneath your shoulder and shoulder far away from your ear - use top leg to support yourself as needed'        
    },
    {
        name: 'Foam Roll Deadbug',
        video: 'https://www.youtube.com/embed/YypiW9tnAuk',
        cues: '- keeping foam roller still, alternate extending legs'        
    },
    {
        name: 'Split Squat',
        video: 'https://www.youtube.com/embed/US7HOgsqy4A',
        cues: '- sound on for cues'        
    },
    {
        name: 'Flat Dumbbell Bench Press',
        video: 'https://www.youtube.com/embed/ez5Ai-ISgHA',
        cues: '- arms and elbows should form a arrow shape with your body, not a "T"'        
    },
    {
        name: 'Sled Leg Press Machine',
        video: 'https://www.youtube.com/embed/QAJV8GdMqZ4',
        cues: '- feet will be your squat stance or just outside hip width apart - keep pressure equally through your whole foot as you go through the movement - back stays planted into seat'        
    },
    {
        name: 'Lying Dumbbell Chest Fly',
        video: 'https://www.youtube.com/embed/Jr8mGj7_kQ8',
        cues: '- slight bend of elbows - arms stay in line with chest'        
    },
    {
        name: 'Incline Hammer Curls',
        video: 'https://www.youtube.com/embed/SbSnwmPcXd8',
        cues: '- palms stay facing each other'        
    },
    {
        name: 'Wall Press Heel Taps',
        video: 'https://www.youtube.com/embed/Mwk37tzfpaM',
        cues: '- sound on for cues'        
    },
    {
        name: 'Dumbbell RDL',
        video: 'https://www.youtube.com/embed/HFMMjG1tbf8',
        cues: '- sound on for cues'        
    },
    {
        name: 'Cable Seated Row',
        video: 'https://www.youtube.com/embed/XDrOjGB0dNQ',
        cues: '- slight bend of knees, staying upright - only moving through arms and shoulder blades'        
    },
    {
        name: 'Single-leg Bench Bridge',
        video: 'https://www.youtube.com/embed/TluTGhM-ORs',
        cues: '- bridge through hips, not back - chest stays relaxed'        
    },
    {
        name: 'Lying Dumbbell Pullovers',
        video: 'https://www.youtube.com/embed/y9aTFS65owU',
        cues: '- keep low back pressed into floor - arms go straight overhead as far as you can control'        
    },
    {
        name: 'Deadbug Tricep Extensions',
        video: 'https://www.youtube.com/embed/5LQV2rlTc0k',
        cues: '- back stays flat, should feel abs engaged - only straightening and bending elbow'        
    },
    {
        name: 'Heel Clicks',
        video: 'https://www.youtube.com/embed/0irYeIio9gs',
        cues: '- reach butt back and arms forward - back stays flat'        
    },
    {
        name: 'Hip Hinge w/ Reach',
        video: 'https://www.youtube.com/embed/tnkXfuaeycM',
        cues: '- back stays flat, should feel abs engaged - only straightening and bending elbow'        
    },
    {
        name: 'Plank to Down Dog',
        video: 'https://www.youtube.com/embed/czjs8nV2kDk',
        cues: '- reach long through the arms (pushing yourself away from the ground)'        
    },
    {
        name: 'Lateral Step-up',
        video: 'https://www.youtube.com/embed/ooVLgaFE6F4',
        cues: '- keep body shifted into woking leg - choose a manageable box height that allows you to control yourself down'        
    },
    {
        name: 'Seated Arnold Press',
        video: 'https://www.youtube.com/embed/gyaRtQ4-C2A',
        cues: '- palms face you at the bottom and out at the top'        
    },
    {
        name: 'Suitcase March in Place',
        video: 'https://www.youtube.com/embed/B4y8hZCKiFk',
        cues: '- stay tall and stacked through hips and ribs - exhale to get abs engaged before you start and fight to keep them as you switch legs - the heavier the weight the more challenging'        
    },
    {
        name: 'Assisted Single-leg RDL',
        video: 'https://www.youtube.com/embed/yg3yTd51gNA',
        cues: '- reach hips backwards while keeping back flat and weight close to your body'        
    },
    {
        name: 'Barbell Bent-over Row (pronated)',
        video: 'https://www.youtube.com/embed/-nfssCpG9FQ',
        cues: '- hinge back into hips - back flat - should feel glutes and hamstrings holding you up'        
    },
    {
        name: 'Forearm Plank',
        video: 'https://www.youtube.com/embed/moz2IbXbhzk',
        cues: '- sound on for cues'        
    },
    {
        name: 'Tall Kneeling Alternating Lateral/Front Raise',
        video: 'https://www.youtube.com/embed/5Im7DNvfoLo',
        cues: '- arms go just above shoulder level - alternate reaching forward and lateral'        
    },
    {
        name: 'Reverse Crunch',
        video: 'https://www.youtube.com/embed/ZnA0IkXfaLE',
        cues: '- Keep heels pulled in towards your butt - Knees into your chest - Squeeze a yoga block if you have it'        
    },
    {
        name: 'Banded Around the World',
        video: 'https://www.youtube.com/embed/QFJ9ccjpRpo',
        cues: '- keep a gentle pull on a light resistance band - try to keep arms as straight as possible'        
    },
    {
        name: 'Worlds Greatest',
        video: 'https://www.youtube.com/embed/2K9Zzul6Nfc',
        cues: '- actively reach arm towards the ceiling'        
    },
    {
        name: 'Adductor Rockback w/ Hip Extension',
        video: 'https://www.youtube.com/embed/s0D5fKct3so',
        cues: '- back stays flat as you hinge back into hips - hips stack underneath you as you become upright'        
    },
    {
        name: 'Squat to Stand',
        video: 'https://www.youtube.com/embed/_Munpoy_lnw',
        cues: '- full inhale into upper back at the top - full exhale at the bottom'        
    },
    {
        name: 'Cat/Cow',
        video: 'https://www.youtube.com/embed/sHmNSIIemaE',
        cues: '- inhale as you round through spine and low back - exhale as you extend'        
    },

]

Exercise.deleteMany({})
    .then(() => {
    return Exercise.insertMany(exercise)
    })
    .then((exercise) => {
    console.log(exercise)
    })
    .catch((err) => {
    console.log(err)
    })
    .finally(() => {
    process.exit()
})