import { Dropdown } from 'react-bootstrap';

import './DashboardDropdown.css';

const DashboardDropdown = (props) => {

    const pathname = window.location.pathname;

    return (
        <div className="pillar-dropdown">
            {/* https://react-bootstrap.github.io/components/dropdowns/ 
                            (only react-bootstrap dropdown works) */}
            <Dropdown>
                <Dropdown.Toggle variant="secondary" className="pillar-dropdown-toggle" id="dropdown-basic" >
                    {pathname.includes('mind')
                        ? "Mind"
                        : pathname.includes('fitness')
                            ? "Fitness"
                            : pathname.includes('rest')
                                ? "Rest"
                                : pathname.includes('nutrition')
                                    ? "Nutrition"
                                    : "Pillar Menu"
                    }
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {pathname.includes('mind')
                        ? <>
                            <Dropdown.Item className="pillar-dropdown-menu" href="/dashboard/nutrition" disabled>Nutrition</Dropdown.Item>
                            <Dropdown.Item className="pillar-dropdown-menu" href="/dashboard/fitness" disabled>Fitness</Dropdown.Item>
                            <Dropdown.Item className="pillar-dropdown-menu" href="/dashboard/rest" disabled>Rest</Dropdown.Item>
                        </>
                        : pathname.includes('fitness')
                            ? <>
                                <Dropdown.Item className="pillar-dropdown-menu" href="/dashboard/nutrition" disabled>Nutrition</Dropdown.Item>
                                <Dropdown.Item className="pillar-dropdown-menu" href="/dashboard/rest" disabled>Rest</Dropdown.Item>
                                <Dropdown.Item className="pillar-dropdown-menu" href="/dashboard/mind">Mind</Dropdown.Item>
                            </>
                            : pathname.includes('rest')
                                ? <>
                                    <Dropdown.Item className="pillar-dropdown-menu" href="/dashboard/nutrition" disabled>Nutrition</Dropdown.Item>
                                    <Dropdown.Item className="pillar-dropdown-menu" href="/dashboard/fitness" disabled>Fitness</Dropdown.Item>
                                    <Dropdown.Item className="pillar-dropdown-menu" href="/dashboard/mind">Mind</Dropdown.Item>
                                </>
                                : pathname.includes('nutrition')
                                    ? <>
                                        <Dropdown.Item className="pillar-dropdown-menu" href="/dashboard/fitness" disabled>Fitness</Dropdown.Item>
                                        <Dropdown.Item className="pillar-dropdown-menu" href="/dashboard/rest" disabled>Rest</Dropdown.Item>
                                        <Dropdown.Item className="pillar-dropdown-menu" href="/dashboard/mind">Mind</Dropdown.Item>
                                    </>
                                    : <>
                                        <Dropdown.Item className="pillar-dropdown-menu" href="/dashboard/nutrition" disabled>Nutrition</Dropdown.Item>
                                        <Dropdown.Item className="pillar-dropdown-menu" href="/dashboard/fitness" disabled>Fitness</Dropdown.Item>
                                        <Dropdown.Item className="pillar-dropdown-menu" href="/dashboard/rest" disabled>Rest</Dropdown.Item>
                                        <Dropdown.Item className="pillar-dropdown-menu" href="/dashboard/mind">Mind</Dropdown.Item>
                                    </>
                    }
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}

export default DashboardDropdown
