import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <a>Listening</a>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Listening Part 1</li>
                    <li className="sidebarListItem">Listening Part 2</li>
                    <li className="sidebarListItem">Listening Part 3</li>
                    <li className="sidebarListItem">Listening Part 4</li>
                </ul>
                <a>Reading</a>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Reading Part 5</li>
                    <li className="sidebarListItem">Reading Part 6</li>
                    <li className="sidebarListItem">Reading Part 7</li>
                </ul>
            </div>
        </div>
    )
}