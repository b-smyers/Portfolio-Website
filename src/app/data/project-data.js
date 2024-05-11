export const project_data = [{
    id: 0,
    name: "Dungeon Odyssey",
    role: "Solo Developer",
    link: "https://www.roblox.com/games/5195557959/Dungeon-Odyssey",
    timeFrame: "Jun 2020 - Present",
    brief: "Dungeon Odyssey is a procedurally generated dungeon crawler where you and your party defeat monsters, collect loot, and delve deeper, uncovering the secrets of the dungeon on your journey.",
    long_description: "During my sophomore year of high school, the concept of a procedurally generated dungeon crawler game finally materialized into a project outline on paper. Despite the initial detailed requirements, Dungeon Odyssey's inception wasn't straightforward. On June 17, 2020, I made my initial attempt to bring the game to life as a turn-based dungeon crawler. However, the gameplay felt static, and the dungeon room generation was overly limited, lacking space for future creativity. After completing the initial prototype, it was evident that the game's requirements needed revising, and the project's scope needed to be reduced. Many non-essential or flawed features were scrapped, replaced by core ideas that seamlessly integrated with the existing requirements. Work on the current version of the game commenced on November 14, 2020. Adopting a broader perspective, I devised a set of custom services to simplify common functions into reusable components. These services managed items, inventories, experience, entities, and item models, among others. These adjustments led to significant progress, shaping the game into its current form. While Dungeon Odyssey might not achieve widespread popularity, it provided invaluable experience in navigating a complex and interconnected code base. Moreover, it served as a platform to hone my cybersecurity skills through cheat prevention techniques and client/server seperation.",
    srcs: ["./assets/images/DungeonOdyssey1.png", "./assets/images/DungeonOdyssey2.jpg", "./assets/images/DungeonOdyssey3.jpg", "./assets/images/DungeonOdyssey4.jpg"]
},
{
    id: 1,
    name: "Battlecode 2024",
    role: "Team Leader",
    link: "https://github.com/OU-CS3560/s24-battlecode", // Private repo
    timeFrame: "Jan 2024 - May 2024",
    brief: "Battlecode is a competitive real time strategy (RTS) game developed by MIT, it which participants create a distributed AI system to control to battle against other competitors.",
    long_description: "I first encountered Battlecode during a software tools class, where we organized into groups for our semester project. This year's challenge was a capture-the-flag-style game, where the objective for the AI was to capture three enemy flags for victory. As I delved deeper into the Battlecode API, I found myself captivated by the project, prompting me to swiftly begin crafting my initial prototype. Much of the strategy for our first prototype was guided by intuitive principles such as \"If you're low on health, then retreat.\" Our group met weekly to discuss our progress and set goals for the following week. Additionally, we presented bi-weekly progress reports to the class, a task I particularly enjoyed due to my passion for the project. Towards the end of the semester, I experimented with a GitHub workflow to conduct scrimmages pitting our best AI against some of the open-source competitors from that year. Impressively, our AI dominated the high school bracket, remaining undefeated throughout. However, this success didn't translate to the international bracket, where we experienced some setbacks. Despite this, our performance allowed us to estimate our AI's position around 16th place. As first-time competitors, our efforts yielded a formiddable AI. Furthermore, the project provided invaluable experience with JUnit, Gradle, and GitHub Actions. I eagerly look forward to participating in Battlecode again.",
    srcs: ["./assets/images/Battlecode-DefaultMedium.png", "./assets/images/Battlecode-MazeRunner.png", "./assets/images/Battlecode-GitHubActions.jpg"]
},
{
    id: 2,
    name: "Boop AI Arena",
    role: "Repository Owner",
    link: "https://github.com/b-smyers/Boop-AI-Arena",
    timeFrame: "December 2023",
    brief: "Boop AI Arena is a terminal based extension on the final project for a computer science class. The program was created to allow anyone to create there own AI strategies for the game Boop (a tic tac toe like game), and be able to see how they compare to other AI.",
    long_description: "In the last weeks of my Computer Science II class we were given a final project to recreate a game called \"Boop\" as a terminal game. The project had two parts, in the first part you needed to create the game and all its logic, and in the second you had to create an AI player. After completing the game I spent a lot of time trying to tweak the AI to perform better but could never have it beat me. The project came with some starting AI code that would perform an unoptimized tree search on the game state, which was very limiting. After completing the AI I created the Boop AI Arena that removed the restrictions of the original game and allowed custom made AI to play against one another. I set up a system to measure average time, turns, and overall performance between two AI. While creating this project I experimented with Mini Max or Alpha Beta tree pruning techniques which proved as much better AI's than the original project's. I gained a lot more experience using polymorphism in c++ and organizing a medium sized project.",
    srcs: ["./assets/images/BoopAIArena-Output.jpg"]
},
{
    id: 3,
    name: "Bridge Truss Solver",
    role: "Repository Owner",
    link: "https://github.com/b-smyers/BridgeTrussSolver",
    timeFrame: "December 2022",
    brief: "The bridge truss solver was created using python and matplotlib to analyze and optimize bridge truss designs. The program can handle custom materials and their compressive and tensile strengths.",
    long_description: "This project marks my debut on GitHub, sparked by a high school physics assignment where we were challenged to create the most effecient balsa wood bridge. While conventional design methods involved sketches or improvisation, our bridges were assessed based on their weight-to-strength ratio. Because of this, I developed a Python truss analysis program to evaluate designs beforehand. This program identifies compressive and tensile forces within the members and visualizes stress levels using a color-coded system, considering material strengths. Additionally, I experimented with a genetic algorithm to discover optimal designs, although creating an unbreakable fitness function proved extremely difficult, resulting in some unconventional yet intriguing designs. While I utilized the program to judge my bridge, another strategy emerged: guiding forces into the sides of the test stand rather than from the top surface. Implementing this tactic, my final bridge design shattered the class record, and has yet to be beaten.",
    srcs: ["./assets/images/BridgeTrussSolver1.png", "./assets/images/BridgeTrussSolver2.jpg"]
}]