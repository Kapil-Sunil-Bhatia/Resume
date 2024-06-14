import React from 'react';
import "../resources/about.css";
import { Button } from 'antd';
import { FacebookFilled, LinkedinFilled, GithubFilled } from "@ant-design/icons";
function About() {
    // The URL to be shared

    return (
        <>
            {/* Header Component to Navigate */}

            {/* Main Content */}
            <div className='box items-center justify-center ml-[10vw] mr-[10vw] mt-[5vw]'>
                <h1 className="heading text-3xl text-center md:text-4xl mb-[2vw]">
                    Welcome to our Resume Builder !
                </h1>
                <br></br>

                {/*  About Us paragraph */}
                <p1 className="mt-15 text-xl justify-center">
                    We understand the importance of creating a professional and impactful resume.
                    We believe that a well-crafted resume can make a significant difference in your job search, helping you stand out from the competition
                    and land your dream job.<br /><br />Our Resume Builder is designed to simplify the resume creation process, offering a user-friendly interface
                    and a wide range of customizable templates. Whether you're a recent graduate, a seasoned professional, or making a career transition,
                    our platform provides the tools and resources you need to create a compelling resume that highlights your skills, experience,
                    and achievements.  "
                </p1>
                <br></br>
                <h2 className='mt-8 font-bold text-xl text-center'>
                    Share with Your Friends.
                </h2>

                {/* Share buttons */}
                <div className='social mt-8 flex justify-center'>
                    <div style={{ marginRight: "2vh" }}>
                        {/* Facebook share button */}
                        <Button icon={<FacebookFilled />}></Button >
                    </div>

                    <div style={{ marginRight: "2vh" }}>
                        {/* LinkedIn share button */}
                        <Button icon={<LinkedinFilled />}></Button >
                    </div>

                    <div style={{ marginRight: "2vh" }}>
                        {/* WhatsApp share button */}
                        <Button icon={<GithubFilled />}></Button >
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;