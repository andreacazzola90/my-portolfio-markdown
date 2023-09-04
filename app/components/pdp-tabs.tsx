'use client'
import { Tabs, TabList, Tab, TabPanel, } from "react-tabs"

export default function PdpTabs() {

    return (
        <>
            {/* Tabs */}
            <Tabs selectedTabClassName={'tab-active focus-visible:none'}>
                <TabList className="tabs pt-12 ">
                    <Tab
                        className="tab tab-lg tab-lifted focus-visible:outline-none"
                    >
                        Description
                    </Tab>
                    <Tab className="tab tab-lg tab-lifted focus-visible:outline-none">
                        Product Details
                    </Tab>
                    <Tab className="tab tab-lg tab-lifted focus-visible:outline-none">
                        Vendor Info
                    </Tab>
                    <Tab className="tab tab-lg tab-lifted focus-visible:outline-none">
                        Reviews
                    </Tab>
                </TabList>
                <TabPanel>
                    <p className="text-black p-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea comm
                    </p>
                </TabPanel>
                <TabPanel>
                    <p className="text-black p-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel>
                    <p className="text-black p-4">
                        Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum. Sed ut perspiciatis unde omnis
                        iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae dicta
                        sunt explicabo.
                    </p>
                </TabPanel>
                <TabPanel>
                    <p className="text-black p-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </TabPanel>
            </Tabs>
        </>

    )
}