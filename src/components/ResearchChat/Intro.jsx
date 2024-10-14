import React from 'react';

function Intro() {
    return (
        <section className="bg-black text-white p-6 rounded-lg shadow-lg">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-4">AI Chatbot</h1>
                <p className="text-lg mb-4">
                    AI Chatbot เป็นนวัตกรรมที่นำเทคโนโลยีปัญญาประดิษฐ์ (AI) เข้ามาช่วยในการสื่อสารและประมวลผลข้อมูลในรูปแบบที่ง่ายและสะดวก โดย AI Chatbot มีความสามารถในการตอบสนองต่อคำถามและให้ข้อมูลในเวลาจริง (real-time) ทำให้การสื่อสารระหว่างมนุษย์และเครื่องจักรเป็นไปอย่างราบรื่น รวดเร็ว และมีความแม่นยำสูง ส่งผลให้ AI Chatbot กลายเป็นเครื่องมือสำคัญในการเพิ่มประสิทธิภาพในหลายด้าน ทั้งในการศึกษา ธุรกิจ และการบริการทั่วไป
                </p>

                <h2 className="text-2xl font-semibold mb-2">1. คุณสมบัติเด่นและนวัตกรรม</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>การสนทนาและตอบสนองอัตโนมัติ: AI Chatbot สามารถเข้าใจและตอบกลับคำถามได้อย่างรวดเร็วและถูกต้อง</li>
                    <li>การประมวลผลแบบเรียลไทม์: AI สามารถให้คำตอบและข้อมูลที่ถูกต้องในทันที</li>
                    <li>การเรียนรู้และปรับตัว: ด้วยเทคโนโลยี machine learning AI Chatbot สามารถพัฒนาตนเองและตอบคำถามได้ดีขึ้นเรื่อยๆ</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-2">2. การประยุกต์ใช้ในด้านการศึกษาและธุรกิจ</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>การศึกษา: ช่วยนักเรียนและครูในการเรียนรู้และค้นหาข้อมูลได้รวดเร็ว</li>
                    <li>ธุรกิจ: ลดภาระการบริการลูกค้าและเพิ่มความพึงพอใจ</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-2">3. อนาคตของ AI Chatbot</h2>
                <p className="text-lg">
                    AI Chatbot ยังคงพัฒนาไปอย่างต่อเนื่อง โดยในอนาคตอาจมีการเชื่อมต่อกับระบบคลาวด์และการวิเคราะห์ข้อมูลขนาดใหญ่ ทำให้สามารถประมวลผลและให้ข้อมูลที่ซับซ้อนได้มากขึ้น
                </p>
            </div>
        </section>
    );
}

export default Intro;