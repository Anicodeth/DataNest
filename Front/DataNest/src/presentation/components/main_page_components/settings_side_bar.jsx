
export default function SettingsSideBar(){
    return(
        <div className="settings-side-bar h-full bg-red-200">
            <div className="settings-side-bar__header">
                <h1>Settings</h1>
            </div>
            <div className="settings-side-bar__content">
                <ul>
                    <li>Account</li>
                    <li>Security</li>
                    <li>Notifications</li>
                    <li>Privacy</li>
                    <li>Help</li>
                    <li>Logout</li>
                </ul>
            </div>
        </div>
    );

};