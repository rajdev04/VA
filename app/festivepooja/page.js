import React from 'react'
import Nav from '@/app/components/nav'
import Link from 'next/link'



const page = () => {
    const arr = [
        {
            'img': 'yaadein135.jpg',
            'main': 'Diwali Poojan',
            'subMain': 'Illuminating Divine Blessings',
            'subMain2': 'Diwali Poojan is deeply rooted in Hindu traditions and finds mention in various religious texts, including the "Padma Purana" and "Skanda Purana," which highlight the significance of celebrating Diwali with rituals and prayers.',
            'sc1': 'Importance',
            'sc2': 'Diwali Poojan holds immense importance as it marks the triumph of light over darkness, symbolizing the victory of good over evil. It is a time-honored tradition to seek divine blessings for prosperity, happiness, and spiritual illumination.',
            'sc3': 'Who Should Do It',
            'sc4': 'Diwali Poojan is inclusive and can be performed by individuals and families, irrespective of age or background, who wish to embrace the festive spirit and invite positive energies into their lives.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'The pooja is performed to express gratitude, usher in prosperity, and invoke the blessings of deities for a joyous and harmonious life. It symbolizes the renewal of spiritual energy and the dispelling of negativity.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Pooja Diwali Poojan is traditionally performed on the auspicious day of Diwali, which falls on the new moon night of the Hindu month of Kartika.',
            'sc9': 'Benefits',
            'sc10': 'The ritual is believed to attract divine blessings, bringing wealth, happiness, and success into the lives of those who perform it with devotion.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Diwali evening, during the auspicious muhurat, is considered the best time for Diwali Poojan, aligning with the traditional celebration of lights.Diwali Poojan is typically conducted at homes, adorned with festive decorations and lights, creating a sacred and joyous atmosphere for the entire family.'
        },
        {
            'img': '',
            'main': 'Holi Poojan ',
            'subMain': 'Celebrating Colors of Divine Blessings',
            'subMain2': 'Holi Poojan is deeply rooted in Hindu traditions, celebrating the joyous festival of Holi, mentioned in various religious texts, including the "Bhagavad Gita" and "Bhavishya Purana," which narrate the significance of the festival.',
            'sc1': 'Importance',
            'sc2': 'Holi Poojan holds great importance as it aligns with the vibrant spirit of the Holi festival, symbolizing the victory of good over evil and the arrival of spring. It is a time to seek divine blessings for joy, love, and the triumph of light.',
            'sc3': 'Who Should Do It',
            'sc4': 'Holi Poojan is inclusive and can be performed by individuals and families, embracing the festive enthusiasm and wanting to infuse their lives with divine colors of happiness.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'The pooja is performed to invoke divine blessings for a colorful life, filled with joy, unity, and spiritual vibrancy. It symbolizes the renewal of positive energies and the elimination of negativity.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Holi Poojan is traditionally performed on the day of Holi, marking the arrival of spring, usually in March.',
            'sc9': 'Benefits',
            'sc10': 'The ritual is believed to attract divine blessings, fostering happiness, unity, and a sense of renewal in the lives of those who partake in the festive celebration.',
            'sc11': 'Best Time and Place ',
            'sc12': 'The best time for Holi Poojan is during the vibrant festivities of Holi when people come together to celebrate the colors of life.Holi Poojan is often conducted in homes or at community gatherings where the spirit of Holi is celebrated with enthusiasm and devotion, creating a lively and festive atmosphere.'
        },
        {
            'img': '',
            'main': 'Naagpanchami Poojan ',
            'subMain': 'Honoring the Serpent Deities',
            'subMain2': 'Naagpanchami Poojan finds its roots in Hindu traditions and is mentioned in various religious texts such as the "Garuda Purana" and "Shiva Purana," illustrating the reverence for serpent deities.',
            'sc1': 'Importance',
            'sc2': 'Naagpanchami Poojan holds significant importance as it is dedicated to honoring serpent deities, symbolizing protection, fertility, and cosmic balance. It is a time-honored tradition to seek blessings and safeguard against snake-related afflictions.',
            'sc3': 'Who Should Do It',
            'sc4': 'Individuals and families who wish to express devotion and seek protection against snake-related dangers may choose to perform Naagpanchami Poojan.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'The pooja is performed to invoke the blessings of serpent deities, seeking their protection from snake bites and related ailments. It is also believed to bring prosperity and harmony to the household.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'This Pooja Naagpanchami Poojan is traditionally performed on the fifth day (Panchami) of the bright half of the lunar month of Shravan, usually falling in July or August.',
            'sc9': 'Benefits',
            'sc10': 'The ritual is believed to offer protection from snake-related dangers, promote fertility, and bring blessings of prosperity and harmony to the devotees.',
            'sc11': 'Best Time and Place ',
            'sc12': 'auspicious time for Naagpanchami Poojan is during the daytime on the fifth day of the lunar month of Shravan.Naagpanchami Poojan can be performed at home or in temples dedicated to serpent deities, creating a sacred atmosphere for devotees to express their reverence and seek divine blessings.'
        },
        {
            'img': '',
            'main': 'Ramnavmi Poojan ',
            'subMain': 'Celebrating the Birth of Lord Rama',
            'subMain2': 'Ramnavmi Poojan is deeply rooted in Hindu scriptures, specifically the "Valmiki Ramayana" and other sacred texts that narrate the divine story of Lord Rama.',
            'sc1': 'Importance',
            'sc2': 'This pooja holds immense significance as it commemorates the birth of Lord Rama, who is the seventh renowned incarnation of Lord Vishnu. This pooja signifies the victory of dharma (righteousness) over any adharma (unrighteousness), and it serves as a source of inspiration for devotees.',
            'sc3': 'Who Should Do It',
            'sc4': 'Ramnavmi Poojan is open to all devotees who wish to honor and celebrate the divine birth of Lord Rama, seeking his blessings for a righteous and harmonious life.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'The pooja is performed to express devotion to Lord Rama, seeking his divine grace for courage, righteousness, and spiritual enlightenment. It is an opportunity to connect with the ideals embodied by Lord Rama.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Pooja Ramnavmi Poojan is traditionally observed on the ninth day (Navami) of the Chaitra month of the Hindu calendar, usually falling in March or April.',
            'sc9': 'Benefits',
            'sc10': 'Devotees believe that performing Ramnavmi Poojan brings spiritual upliftment, blessings for righteous living, and harmony within the family.',
            'sc11': 'Best Time and Place ',
            'sc12': 'The auspicious time for Ramnavmi Poojan is during the daytime on the ninth day of the Chaitra month.Ramnavmi Poojan can be conducted at home, in community gatherings, or at temples dedicated to Lord Rama, creating a sacred ambiance for devotees to celebrate the divine birth.'
        },
        {
            'img': '',
            'main': 'Akshay Tritiya Poojan ',
            'subMain': 'Auspicious Celebrations of Eternal Prosperity',
            'subMain2': 'Akshay Tritiya, also known as Akti or Akha Teej, is mentioned in various Hindu scriptures, including the Mahabharata. It is considered a day of eternal significance.',
            'sc1': 'Importance',
            'sc2': 'Akshay Tritiya Poojan marks a day of perpetual prosperity and good fortune. The word "Akshay" means eternal, and the day is believed to bring unending success and abundance.',
            'sc3': 'Who Should Do It',
            'sc4': 'This pooja is open to all individuals and families seeking blessings for enduring prosperity, making it an inclusive and joyous celebration.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Akshay Tritiya Poojan is performed to invite divine blessings for prosperity, wealth, and success. Devotees believe that any auspicious activity undertaken on this day yields perpetual benefits.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Akshay Tritiya usually falls on the third day (Tritiya) of the bright half of the lunar month of Vaishakha, typically in April or May.',
            'sc9': 'Benefits',
            'sc10': 'Devotees believe that performing Akshay Tritiya Poojan brings long-lasting success, wealth, and happiness to their lives.',
            'sc11': 'Best Time and Place ',
            'sc12': 'The most auspicious time for Akshay Tritiya Poojan is during the daylight hours of the Tritiya tithi.Akshay Tritiya Poojan can be conducted at home, in community gatherings, or at temples where the atmosphere is filled with joy and the spirit of eternal prosperity.'
        }
        ,
        {
            'img': '',
            'main': 'Janmashtami Poojan',
            'subMain': 'Celebrating the Divine Birth of Lord Krishna',
            'subMain2': 'The celebration of Janmashtami is deeply rooted in the Bhagavad Gita and the Srimad Bhagavatam, where the divine birth of Lord Krishna is described.',
            'sc1': 'Importance',
            'sc2': 'Janmashtami Poojan holds immense significance as it commemorates the birth of Lord Krishna, the eighth avatar of Lord Vishnu. It symbolizes the superiority of good over evil.',
            'sc3': 'Who Should Do It',
            'sc4': 'Devotees across all age groups and backgrounds participate in Janmashtami Poojan to seek the blessings of Lord Krishna and celebrate the divine play of his childhood.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Janmashtami Poojan is performed to express devotion to Lord Krishna, seeking his divine blessings for happiness, prosperity, and spiritual enlightenment.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Janmashtami falls on the eighth day (Ashtami) of the dark fortnight of the lunar month of Bhadrapada, usually in August.',
            'sc9': 'Benefits',
            'sc10': 'Janmashtami Poojan is believed to bring joy, inner peace, and spiritual growth. Devotees also seek protection and guidance from Lord Krishna.',
            'sc11': 'Best Time and Place ',
            'sc12': 'The most auspicious time for Janmashtami Poojan is during the midnight hours, believed to be the time of Lord Krishnas birth.Janmashtami Poojan can be conducted in homes, temples, and community gatherings where devotees come together to celebrate the divine birth of Lord Krishna.'
        }
        ,
        {
            'img': '',
            'main': 'Ganesh Chaturthi Poojan ',
            'subMain': 'Invoking the Blessings of Lord Ganesha',
            'subMain2': 'The significance of Ganesh Chaturthi Poojan is embedded in the Ganapati Atharvashirsha along with the Ganesh Purana, which elegantly narrates the birth and divine attributes of Lord Ganesha.',
            'sc1': 'Importance',
            'sc2': 'Ganesh Chaturthi is also known as Vinayaka Chaturthi as it marks the birthday of Lord Ganesha, who is the remover of obstacles and the harbinger of good fortune.',
            'sc3': 'Who Should Do It',
            'sc4': 'Devotees from all walks of life may celebrate this Poojan. Those who are seeking the divine intervention of Lord Ganesha in various aspects of life can also enjoy this festival.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Ganesh Chaturthi Poojan is performed to seek blessings for success, wisdom, and aloongwith the removal of any old or new obstacles. It is also a way of expressing gratitude to the Lord.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Ganesh Chaturthi is observed on the fourth day of the waxing moon in the Hindu month of Bhadrapada, usually in August or September.',
            'sc9': 'Benefits',
            'sc10': 'The worship of Lord Ganesha during Ganesh Chaturthi is believed to bring prosperity, intelligence, and harmony. Devotees also seek his blessings for new beginnings and endeavors.',
            'sc11': 'Best Time and Place ',
            'sc12': 'The most auspicious time for Ganesh Chaturthi Poojan is during the Chaturthi tithi, with elaborate ceremonies and rituals performed on the day of the festival.Ganesh Chaturthi is widely celebrated in homes and communities, some of the best places to witness grand festivities include renowned Ganesha temples like Siddhivinayak Temple in Mumbai and Lalbaugcha Raja in Pune.'
        }
        ,
        {
            'img': '',
            'main': 'Karwa Chauth Poojan ',
            'subMain': 'A Sacred Bond of Love and Devotion',
            'subMain2': 'Karwa Chauth, a revered Hindu fasting ritual, is mentioned in ancient scriptures like the Mahabharata. Its significance is embedded in the tale of Queen Draupadi observing this fast for the well-being of her husband.',
            'sc1': 'Importance',
            'sc2': 'Karwa Chauth Poojan holds immense cultural and emotional significance, symbolizing the deep love and commitment between married couples. It is observed by married women for the longevity and prosperity of their husbands.',
            'sc3': 'Who Should Do It',
            'sc4': 'Married Hindu women partake in Karwa Chauth Poojan to express their love and devotion to their husbands.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'The fasting and prayers during Karwa Chauth are believed to strengthen the marital bond, bring happiness, and safeguard the well-being of the spouse.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Karwa Chauth is observed on the fourth day after the full moon in the Hindu month of Kartika, typically in October or November.',
            'sc9': 'Benefits',
            'sc10': 'Devotees believe that observing Karwa Chauth brings blessings for a happy and enduring married life. It is also considered a powerful way to pray for the health and prosperity of the family.',
            'sc11': 'Best Time and Place ',
            'sc12': 'The most significant time for Karwa Chauth Poojan is during the evening, marked by rituals like sighting the moon and breaking the fast after the moonrise.Karwa Chauth is predominantly observed in the homes of married couples, creating a sacred and intimate atmosphere.'
        }
        ,
        {
            'img': '',
            'main': 'Dhanteras Poojan ',
            'subMain': 'Invoking Prosperity and Wealth',
            'subMain2': 'Dhanteras, a significant Hindu festival, is mentioned in religious scriptures like the Skanda Purana. It is associated with the story of King Himas son, whose life was saved by the clever intervention of his wife on the night of Dhanteras.',
            'sc1': 'Importance',
            'sc2': 'Dhanteras Poojan marks the commencement of Diwali celebrations and is dedicated to inviting wealth and prosperity into the lives of devotees. It holds immense significance for business communities and households alike.',
            'sc3': 'Who Should Do It',
            'sc4': 'Dhanteras Poojan is observed by people of all ages, especially those seeking blessings for financial growth and stability.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Devotees believe that performing Dhanteras Poojan with devotion and sincerity can attract the blessings of Goddess Lakshmi, the deity of wealth, and remove financial obstacles.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Dhanteras is observed on the thirteenth day of the dark fortnight in the Hindu month of Kartika, usually in October or November.',
            'sc9': 'Benefits',
            'sc10': 'Dhanteras Poojan is believed to bring prosperity, success in business ventures, and overall financial well-being. It is an auspicious way to start the Diwali festivities.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Dhanteras Poojan is during the evening, marking the beginning of the festive season.Dhanteras Poojan is typically performed at home in a clean and sanctified space, creating an atmosphere of divine blessings.'
        }
        ,
        {
            'img': '',
            'main': 'Vasant Panchami Poojan ',
            'subMain': 'Embracing the Arrival of Spring',
            'subMain2': 'Vasant Panchami, rooted in the Vedas and mentioned in various Puranas, holds a special place in Hindu traditions. Its associated with the goddess Saraswati, the embodiment of knowledge and arts.',
            'sc1': 'Importance',
            'sc2': 'Vasant Panchami marks the onset of spring, celebrating the vibrancy and rejuvenation of nature. The pooja is dedicated to Goddess Saraswati, seeking her blessings for wisdom, knowledge, and artistic pursuits.',
            'sc3': 'Who Should Do It',
            'sc4': 'Vasant Panchami Poojan is open to all, especially students, artists, and those inclined towards learning. Its a way to invoke Saraswatis guidance for success in educational and creative endeavors.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Devotees believe that performing Vasant Panchami Poojan aligns them with the creative forces of the universe, fostering intellectual growth and artistic talents.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Vasant Panchami is observed on the fifth day of the bright half of the Hindu month of Magha, usually falling in January or February.',
            'sc9': 'Benefits',
            'sc10': 'The pooja is believed to enhance learning, promote creativity, and bring clarity of thought, making it a propitious occasion for students and artists.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Ideally performed during the morning or afternoon, the pooja aligns with the fresh energy of the spring season.Best Religious Place Vasant Panchami Poojan is commonly performed at home or educational institutions, creating an atmosphere conducive to learning and artistic expression.'
        }
        ,
        {
            'img': '',
            'main': 'Guru Purnima Poojan ',
            'subMain': 'Honoring the Spiritual Guides',
            'subMain2': 'The significance of Guru Purnima is deeply rooted in ancient Hindu scriptures, particularly the Vedas and various Puranas. It is associated with the great sage Vyasa, who is considered the Adi (first) Guru.',
            'sc1': 'Importance',
            'sc2': 'Guru Purnima is a sacred day dedicated to expressing gratitude and reverence to ones spiritual and academic mentors. It symbolizes the disciples acknowledgment of the role played by gurus in their lives.',
            'sc3': 'Who Should Do It',
            'sc4': 'Devotees seeking spiritual wisdom and knowledge often engage in Guru Purnima Poojan. It is open to anyone, regardless of age or background, who wishes to honor and seek blessings from their gurus.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'The pooja is performed to express gratitude, seek guidance, and deepen the spiritual connection with ones gurus. It is a way to honor the importance of knowledge and learning in ones life.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Guru Purnima is celebrated on the full moon day (Purnima) in the Hindu month of Ashadha, typically falling in July. The pooja is performed on this auspicious day.',
            'sc9': 'Benefits',
            'sc10': 'Guru Purnima Poojan is believed to bestow blessings for spiritual growth, enhanced wisdom, and a clear understanding of lifes purpose. It fosters a profound connection between the disciple and the guru.',
            'sc11': 'Best Time and Place ',
            'sc12': ', the pooja is performed during the early morning or evening, aligning with the serene and spiritual atmosphere.Devotees often perform Guru Purnima Poojan in temples, ashrams, or at home in a dedicated sacred space, creating an environment conducive to spiritual reflection and gratitude.'
        }
        ,
        {
            'img': '',
            'main': 'Shivaratri Poojan  ',
            'subMain': 'Embracing the Divine Energy of Lord Shiva',
            'subMain2': 'Shivaratri, or the Night of Shiva, finds its mention in various Hindu scriptures, including the Puranas and the Shiva Purana. It commemorates the divine cosmic dance of Lord Shiva.',
            'sc1': 'Importance',
            'sc2': 'Shivaratri holds immense significance for devotees of Lord Shiva. It marks the night when Shiva performed the Tandava, symbolizing creation, preservation, and destruction, and grants blessings for spiritual elevation.',
            'sc3': 'Who Should Do It',
            'sc4': 'Devotees seeking spiritual growth, seeking Lord Shivas blessings, or those wishing to observe a night of sacred vigil participate in Shivaratri Poojan.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Shivaratri Poojan is performed to seek Lord Shivas blessings for inner strength, peace, and divine grace. It is an opportunity for devotees to purify their souls and receive the benevolent energy of the cosmic dancer.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Shivaratri is observed on the 14th day of the lunar month of Phalguna, usually falling in February or March. The pooja is traditionally performed during the night, emphasizing the significance of the dark hours.',
            'sc9': 'Benefits',
            'sc10': 'Devotees believe that Shivaratri Poojan brings spiritual upliftment, eradicates sins, and promotes mental clarity. It is a path to attain salvation and seek protection from the divine forces.',
            'sc11': 'Best Time and Place ',
            'sc12': 'The pinnacle of Shivaratri Poojan is during the Mahashivaratri night, particularly during the auspicious Nishita Kaal, which is the most favorable time for spiritual practices.While many perform Shivaratri Poojan at home, the most revered places include Shiva temples, especially the twelve Jyotirlingas and major Shiva shrines like Kedarnath and Varanasi, fostering a divine atmosphere for the worship of Lord Shiva.'
        }
        ,
        {
            'img': '',
            'main': 'Shardiya Navratri ',
            'subMain': 'Embracing the Divine Feminine Energy',
            'subMain2': 'Shardiya Navratri is mentioned in Hindu scriptures like the Markandeya Purana and Devi Bhagavata Purana, symbolizing the victory of the Goddess Durga over the buffalo demon Mahishasura.',
            'sc1': 'Importance',
            'sc2': 'Shardiya Navratri, a nine-night festival, celebrates the divine feminine energy embodied in Goddess Durga. It signifies the triumph of good over evil and marks the cosmic battle between the goddess and the demon.',
            'sc3': 'Who Should Do It',
            'sc4': 'Devotees seeking the blessings of Goddess Durga, strength, and protection from negative forces actively participate in Shardiya Navratri Poojan.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Shardiya Navratri Pooja is performed to invoke the protective and nurturing aspects of Goddess Durga. Devotees seek her divine grace for courage, wisdom, and overall well-being.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Shardiya Navratri occurs in the Hindu month of Ashwin, typically between September and October. The pooja is conducted over nine nights, with each night dedicated to one of the nine forms of Goddess Durga.',
            'sc9': 'Benefits',
            'sc10': 'Shardiya Navratri Poojan is believed to bring prosperity, remove obstacles, and grant spiritual growth. Devotees experience a sense of purification, and the divine energy of Goddess Durga is invoked for empowerment.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Shardiya Navratri Pooja is during the nine nights, especially during the auspicious Maha Navami and Vijayadashami days, culminating in the victory of good over evil.Shardiya Navratri is often celebrated in homes with dedicated pooja ceremonies, visiting prominent Durga temples such as Vaishno Devi, Kamakhya Temple, and Maa Chintpurni adds a sacred touch to the festive fervor.'
        }
        ,
        {
            'img': '',
            'main': 'Chaitra Navratri ',
            'subMain': 'Invoking Divine Blessings',
            'subMain2': 'Chaitra Navratri is mentioned in Hindu scriptures such as the Devi Bhagavata Purana and signifies the worship of Goddess Durga during the spring season.',
            'sc1': 'Importance',
            'sc2': 'Chaitra Navratri holds spiritual significance, celebrating the divine feminine energy embodied in Goddess Durga. It symbolizes the triumph of good over evil and the victory of the goddess over the demon Mahishasura.',
            'sc3': 'Who Should Do It',
            'sc4': 'Devotees seeking blessings, strength, and protection from negative forces actively participate in Chaitra Navratri Poojan.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Chaitra Navratri Pooja is performed to invoke the protective and nurturing aspects of Goddess Durga. Devotees seek her divine grace for courage, wisdom, and overall well-being.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Chaitra Navratri falls in the Hindu month of Chaitra, typically between March and April. The pooja is conducted over nine nights, with each night dedicated to one of the nine forms of Goddess Durga.',
            'sc9': 'Benefits',
            'sc10': 'Chaitra Navratri Poojan is believed to bring prosperity, remove obstacles, and grant spiritual growth. Devotees experience purification, and the divine energy of Goddess Durga is invoked for empowerment.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Chaitra Navratri Pooja is during the nine nights, especially during the auspicious Maha Navami and Vijayadashami days, marking the culmination of the festival.Chaitra Navratri is often celebrated in homes with dedicated pooja ceremonies, visiting renowned Durga temples like Vaishno Devi or Maa Chintpurni adds a sacred touch to the festive observance.'
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