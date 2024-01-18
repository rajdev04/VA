import React from 'react'
import Nav from '@/app/components/nav'
import Link from 'next/link'



const page = () => {
    const arr = [
        {
            'img': 'yaadein135.jpg',
            'main': 'Rudrabhishek',
            'subMain': 'Unveiling Divine Blessings',
            'subMain2': 'The sacred Rudrabhishek is profoundly mentioned in the ancient Vedic text, the Rudram Chamakam, a part of the Yajur Veda. It reveres Lord Rudra, a fierce yet benevolent aspect of Lord Shiva.',
            'sc1': 'Importance',
            'sc2': 'Rudrabhishek is a spiritual practice that holds immense significance in Hinduism. It is a way of seeking divine blessings, purification, and liberation. This powerful ritual is believed to cleanse ones soul, remove negative energy, and invoke divine grace.',
            'sc3': 'Who Should Do It',
            'sc4': 'This ritual is open to all individuals seeking spiritual enlightenment, solace, or healing, and those who wish to strengthen their connection with Lord Shiva.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Rudrabhishek is performed to attain inner peace, mitigate hardships, and seek divine protection. It is an expression of devotion and a means of seeking blessings for a prosperous life.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'The auspicious times for performing Rudrabhishek include Maha Shivaratri and Pradosham, but it can be conducted at any time as a form of worship and devotion. Shravan month is considered best suitable for this pooja. ',
            'sc9': 'Benefits',
            'sc10': 'This divine ritual is believed to bestow participants with good health, mental clarity, peace, and relief from negative karma, making it a path to spiritual elevation.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Performing Rudrabhishek at the sacred Kashi Vishwanath Temple in Varanasi, the abode of Lord Shiva, adds to its sanctity. The best time is during the early hours or during auspicious planetary alignments for amplified benefits.'
        },
        {
            'img': '',
            'main': 'Satyanarayan Pooja',
            'subMain': 'Satyanarayan Pooja - Embarking on a Divine Journey',
            'subMain2': 'The Satyanarayan Pooja finds its roots in the Skanda Purana, one of the eighteen Mahapuranas in Hinduism. This text contains the sacred tales of Lord Satyanarayan.',
            'sc1': 'Importance',
            'sc2': 'The Satyanarayan Pooja is a revered Hindu ritual dedicated to Lord Vishnu, the preserver of the universe. It celebrates truth, righteousness, and devotion. This ritual narrates the divine story of Lord Satyanarayan, underlining the significance of faith and goodness.',
            'sc3': 'Who Should Do It',
            'sc4': 'This auspicious ceremony is open to all individuals and families who seek blessings for their well-being and prosperity. It is performed on various occasions, including housewarmings, birthdays, and weddings.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'The Satyanarayan Pooja is a form of gratitude and devotion, seeking the Lords blessings for a harmonious life, wisdom, and prosperity.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'It can be performed on any significant day, but it is often conducted on Purnima (full moon day), Ekadashi, or other auspicious occasions.',
            'sc9': 'Benefits',
            'sc10': 'The Satyanarayan Pooja is believed to bring blessings, success, and happiness. It is known to remove obstacles and bestow spiritual growth.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Conducting this pooja in a clean and tranquil environment is ideal. Home settings or temples are common, and it can be performed in the evening or at dawn for optimal blessings.'
        },
        {
            'img': '',
            'main': 'Mahamrityunjay Jaap',
            'subMain': 'Mahamrityunjay Jaap - Invoking the Divine Healing',
            'subMain2': 'The sacred Mahamrityunjay Mantra is mentioned in the Rigveda, one of the oldest scriptures in Hinduism. This mantra is devoted to Lord Shiva and is known for its potency in averting untimely death and granting healing and strength.',
            'sc1': 'Importance',
            'sc2': 'The Mahamrityunjay Jaap holds immense spiritual significance. Its a potent means of seeking divine intervention, healing, and protection. This mantra invokes the blessings of Lord Shiva, the conqueror of death.',
            'sc3': 'Who Should Do It',
            'sc4': 'This profound ritual is open to all individuals seeking healing, health, or solace in times of distress. Its a source of strength and resilience.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'The Mahamrityunjay Jaap is performed to overcome health challenges, seek longevity, and attain mental and physical well-being. It is an expression of devotion and a plea for divine intervention.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'The Mahamrityunjay Jaap can be performed at any time, but auspicious occasions and times like Maha Shivaratri are considered highly beneficial.',
            'sc9': 'Benefits',
            'sc10': 'This powerful mantra is believed to provide inner peace, mental clarity, and physical healing. It is often chanted to alleviate health issues and ward off the fear of death.',
            'sc11': 'Best Time and Place ',
            'sc12': 'The Markandey Mahadev Temple in Varanasi, dedicated to Lord Shiva, is an auspicious place to perform this jaap. The ideal time is during the early morning hours or during special celestial alignments for maximum spiritual benefits.'
        },
        {
            'img': '',
            'main': 'Ramayan Paath',
            'subMain': 'A Journey Through Divine Saga',
            'subMain2': 'The Ramayan Paath is derived from the great Indian epic, the Ramayana, a revered text attributed to the sage Valmiki. It narrates the life and adventures of Lord Rama.',
            'sc1': 'Importance',
            'sc2': 'The Ramayan Paath is a profound recitation of the epic, symbolizing the virtues of righteousness, devotion, and dharma. It unfolds the divine story of Lord Rama, illustrating the importance of moral values.',
            'sc3': 'Who Should Do It',
            'sc4': 'This sacred ceremony is open to all individuals and families seeking spiritual enlightenment, seeking divine blessings, and wishing to imbibe the teachings of Lord Rama.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'The Ramayan Paath serves as a medium to seek spiritual growth, moral insight, and an understanding of ones own lifes journey. It is a testament to devotion and reverence.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'This paath can be performed at any time, but auspicious occasions such as Rama Navami or during the festive celebration of Diwali hold special significance.',
            'sc9': 'Benefits',
            'sc10': 'The recitation of the Ramayana is believed to purify ones soul, bestow inner peace, and guide individuals on the path of dharma. It offers a sense of direction and solace.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Ideally, the Ramayan Paath is performed in a clean and serene environment. Homes, temples, or sacred spaces dedicated to Lord Rama provide an ideal setting. Early mornings or evenings are favorable for this spiritual journey through the epic.'
        },
        {
            'img': '',
            'main': 'Sunderkaand Paath ',
            'subMain': 'Enchanting the Epic of Valor',
            'subMain2': 'Sunderkand is a captivating chapter from the revered Indian epic, the Ramayana, authored by the sage Valmiki. It narrates the heroic journey of Lord Hanuman in search of Sita, showcasing his unwavering devotion and extraordinary capabilities.',
            'sc1': 'Importance',
            'sc2': 'Sunderkand Paath is a celebration of Lord Hanumans devotion and unwavering loyalty to Lord Rama. It holds immense significance in Hinduism as it symbolizes faith, courage, and the triumph of good over evil.',
            'sc3': 'Who Should Do It',
            'sc4': 'This sacred paath is open to all individuals and families seeking inspiration, courage, and spiritual growth. It is especially beneficial for those facing challenges and adversity.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Sunderkand Paath is performed to seek blessings, inner strength, and divine guidance. It is an expression of devotion and reverence for Lord Hanuman, the embodiment of selfless dedication.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'While it can be performed at any time, auspicious days like Hanuman Jayanti or Tuesdays hold special significance for invoking Lord Hanumans blessings.',
            'sc9': 'Benefits',
            'sc10': 'This paath is believed to grant courage, protection, and relief from obstacles. It invokes strength, faith, and the ability to overcome lifes trials.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Performing Sunderkand Paath in a serene setting such as a temple or home altar is ideal. Early mornings or evenings, when the mind is calm, offer the best atmosphere for this spiritual journey through Lord Hanumans valorous deeds.'
        },
        {
            'img': '',
            'main': 'SatChandi Poojan at Vaidik Anushthanam',
            'subMain': '',
            'subMain2': 'SatChandi Poojan finds its roots in the revered scripture, "Durga Saptashati," a sacred text that narrates the divine exploits of Goddess Durga. This ritual draws inspiration from the verses of this timeless scripture.',
            'sc1': 'Importance',
            'sc2': 'SatChandi Poojan holds profound significance as it invokes the divine energy of Goddess Durga, seeking her blessings for strength, protection, and the removal of obstacles. It is believed to bring harmony and spiritual elevation to the devotees life.',
            'sc3': 'Who Should Do It',
            'sc4': 'This powerful pooja is recommended for those seeking divine intervention in challenging situations, individuals striving for spiritual growth, and devotees desiring protection from negative forces.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Performing SatChandi Poojan is a spiritual endeavor to gain the benevolence of Goddess Durga, fostering courage, resilience, and inner peace. It is an earnest plea for guidance on lifes journey.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'SatChandi Poojan is especially auspicious during Navaratri or any time when seeking the divine mothers blessings is essential for personal or familial well-being.',
            'sc9': 'Benefits',
            'sc10': 'This pooja is believed to confer protection, remove obstacles, and instill a sense of fearlessness. It is a conduit for spiritual elevation, fostering a sense of harmony and balance in the devotees life.',
            'sc11': 'Best Time and Place ',
            'sc12': 'The ideal time for SatChandi Poojan is during the auspicious hours of Navaratri, particularly on significant tithis associated with Goddess Durga.SatChandi Poojan can be performed at home with devotion and purity, the sacred ambiance of a revered temple or a serene, spiritually charged place enhances the efficacy of this ritual. '
        },
        {
            'img': '',
            'main': 'Nau Chandi Poojan at Vaidik Anushthanam',
            'subMain': '',
            'subMain2': 'Nau Chandi Poojan draws inspiration from the sacred text "Chandi Path," a revered scripture that narrates the divine exploits of Goddess Chandi. This ritual pays homage to the cosmic energy of the Divine Mother.',
            'sc1': 'Importance',
            'sc2': 'Nau Chandi Poojan holds immense significance as it invokes the powerful blessings of Goddess Chandi. It is performed to seek protection, divine guidance, and to overcome challenges on the spiritual path.',
            'sc3': 'Who Should Do It',
            'sc4': 'This profound pooja is recommended for devotees seeking divine intervention in times of adversity, individuals aspiring for spiritual growth, and those desiring the removal of obstacles on their life journey.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Nau Chandi Poojan is a spiritual endeavor to connect with the benevolent energy of Goddess Chandi, fostering strength, courage, and inner resilience. It is performed with devotion to seek divine blessings for overall well-being.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Performing Nau Chandi Poojan is especially auspicious during Navaratri or any time when seeking the protective and nurturing energy of the Divine Mother is essential.',
            'sc9': 'Benefits',
            'sc10': 'This pooja is believed to bring protection, dispel negativity, and bestow divine grace. It enhances spiritual progress, instills fearlessness, and ensures harmony in ones life.',
            'sc11': 'Best Time and Place ',
            'sc12': 'The ideal time for Nau Chandi Poojan is during auspicious celestial alignments, particularly on significant tithis associated with Goddess Chandi.Nau Chandi Poojan can be performed with sincerity at home, the sacred ambiance of a revered temple or a spiritually charged location intensifies the spiritual experience'
        },
        {
            'img': '',
            'main': 'Vishnu Sahastranam at Vaidik Anushthanam',
            'subMain': '',
            'subMain2': 'Vishnu Sahastranam, the chanting of a thousand names of Lord Vishnu, finds its origin in the ancient Indian epic, the Mahabharata, specifically in the Anushasan Parva. This revered scripture encapsulates the divine attributes of Lord Vishnu.',
            'sc1': 'Importance',
            'sc2': 'Vishnu Sahastranam holds profound significance as it glorifies the various virtues and aspects of Lord Vishnu, the preserver and protector in the Hindu Trinity. The ritual is a devotional expression of gratitude and reverence.',
            'sc3': 'Who Should Do It',
            'sc4': 'This powerful pooja is recommended for devotees seeking spiritual upliftment, inner peace, and divine blessings. Individuals looking for protection, harmony, and the removal of obstacles can also benefit from this sacred practice.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Vishnu Sahastranam is performed to invoke the divine energy of Lord Vishnu, seeking His blessings for a balanced and righteous life. Devotees undertake this ritual to cultivate devotion and strengthen their spiritual connection.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Vishnu Sahastranam can be performed regularly, and it is especially auspicious during Ekadashi, a sacred day dedicated to Lord Vishnu. Additionally, it is ideal during times of personal challenges or transitions.',
            'sc9': 'Benefits',
            'sc10': 'Chanting Vishnu Sahastranam is believed to bestow divine grace, bring peace of mind, and remove hurdles on the spiritual path. It is considered a purifying and transformative practice with holistic benefits.',
            'sc11': 'Best Time and Place ',
            'sc12': 'The auspicious time for Vishnu Sahastranam is during the early morning or evening, aligning with the serene moments of the day when spiritual energies are heightened.this pooja can be performed at home with sincerity, the serene environment of a temple or a spiritually charged place enhances the spiritual experience. '
        },
        {
            'img': '',
            'main': 'Lakshmi Prapti Poojan at Vaidik Anushthanam',
            'subMain': '',
            'subMain2': 'Lakshmi Prapti Poojan, the ritual for invoking the blessings of Goddess Lakshmi, finds its mention in various Hindu scriptures, including the auspicious Atharva Veda. The sacred hymns and rituals are inspired by the divine wisdom encapsulated in these texts.',
            'sc1': 'Importance',
            'sc2': 'This pooja holds immense significance as it seeks the divine grace of Goddess Lakshmi, the embodiment of wealth, prosperity, and auspiciousness. It is performed with deep devotion to attract positive energies and abundance.',
            'sc3': 'Who Should Do It',
            'sc4': 'Lakshmi Prapti Poojan is recommended for individuals seeking financial stability, prosperity, and overall well-being. Those aspiring for success in their endeavors and the removal of financial obstacles find solace in this ritual.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Performing Lakshmi Prapti Poojan is an earnest appeal for the blessings of Goddess Lakshmi, inviting wealth, prosperity, and harmony into ones life. Devotees undertake this ritual to cultivate abundance and gratitude.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'The pooja is especially auspicious during festivals like Diwali and on Fridays, which are considered highly sacred for Goddess Lakshmi. Additionally, it can be performed during personal financial milestones or challenges.',
            'sc9': 'Benefits',
            'sc10': 'Lakshmi Prapti Poojan is believed to bring financial stability, attract opportunities, and remove hurdles in the path of prosperity. Devotees experience the blessings of Goddess Lakshmi in both material and spiritual realms.',
            'sc11': 'Best Time and Place ',
            'sc12': 'The ideal time for Lakshmi Prapti Poojan is during the evening, aligning with the traditional worship hours and enhancing the spiritual efficacy of the ritual.this pooja can be performed at home with sincerity, the divine ambiance of a temple or a spiritually charged place amplifies the energy. '
        },
        {
            'img': '',
            'main': 'Ashtayam/Keertan at Vaidik Anushthanam',
            'subMain': '',
            'subMain2': 'Ashtayam/Keertan draws inspiration from the sacred scriptures, including the Samaveda, emphasizing the devotional aspect of chanting hymns and singing praises in the divine praise.',
            'sc1': 'Importance',
            'sc2': 'This pooja holds paramount importance as it centers around the devotional practice of singing hymns and praises to the divine. It serves as a soulful expression of love, gratitude, and devotion.',
            'sc3': 'Who Should Do It',
            'sc4': 'Ashtayam/Keertan is inclusive, welcoming individuals of all ages and backgrounds. It is especially recommended for those seeking a devotional and meditative practice to connect with the divine.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Engaging in Ashtayam/Keertan is a spiritual journey that deepens ones connection with the divine. It offers a serene and devotional atmosphere, fostering inner peace, joy, and a sense of oneness.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Ashtayam/Keertan can be performed at any time, but it holds special significance during auspicious occasions, religious festivals, and personal milestones. Regular practice enhances spiritual well-being.',
            'sc9': 'Benefits',
            'sc10': 'The benefits of Ashtayam/Keertan include a heightened sense of spirituality, emotional well-being, and a harmonious environment. It instills a sense of joy and tranquility, promoting a positive mindset.',
            'sc11': 'Best Time and Place ',
            'sc12': 'The best time for Ashtayam/Keertan is during the early morning or evening, creating a serene ambiance conducive to devotional practices.this pooja can be performed at home with sincerity, participating in a group setting or a dedicated spiritual place amplifies the collective energy. '
        }
    ]
  return (
    <>

        <div className='nav-wraper'>
          <Nav></Nav>
        </div>

        <div className='pooja-cont'>

        {arr.map((d)=>(
            <div className='service-cont'>
                <div className='service-img-cont'>
                    <img className='service-img' src=''/>    
                </div>

          
                                    <div className='service-text-cont'>
                                    <div className='main-header'>
                                        <h1>{d.main}</h1>
                                    </div>
                                    <div className='sub-heading'>
                                        <h1>{d.subMain}</h1>
                                        <h2>{d.subMain2}</h2>
                                    </div>
                                    <div className='service-context'>
                                        <h1>{d.sc1}</h1>
                                        <h2>{d.sc2}</h2>
                                    </div>
                                    <div className='service-context'>
                                        <h1>{d.sc3}</h1>
                                        <h2>{d.sc4}</h2>
                                    </div>
                                    <div className='service-context'>
                                        <h1>{d.sc5}</h1>
                                        <h2>{d.sc6}</h2>
                                    </div>
                                    <div className='service-context'>
                                        <h1>{d.sc7}</h1>
                                        <h2>{d.sc8}</h2>
                                    </div>
                                    <div className='service-context'>
                                        <h1>{d.sc9}</h1>
                                        <h2>{d.sc10}</h2>
                                    </div>
                                    <div className='service-context'>
                                        <h1>{d.sc11}</h1>
                                        <h2>{d.sc12}</h2>
                                    </div>
                                </div>
                        <Link href='/booknow' className='book-hyperlink'>Book Now</Link>

            </div>
   ))}

        </div>
    </>
  )
}

export default page