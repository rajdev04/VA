import React from 'react'
import Nav from '@/app/components/nav'
import Link from 'next/link'



const page = () => {
    const arr = [
        {
            'img': 'yaadein135.jpg',
            'main': 'Garbhadan',
            'subMain': 'Invoking Divine Blessings for Conception',
            'subMain2': 'The Garbhadan ceremony draws inspiration from the ancient Hindu scriptures, particularly the Garbha Upanishad and various Vedic texts that emphasize the sacredness of conception and childbirth.',
            'sc1': 'Importance',
            'sc2': 'Garbhadan is a profound ritual, symbolizing the conscious and auspicious beginning of the journey towards parenthood. It invokes divine blessings for a healthy and virtuous progeny.',
            'sc3': 'Who Should Do It',
            'sc4': 'This ceremony is ideally performed by couples aspiring to conceive, seeking the divine grace for a smooth and blessed pregnancy.',
            'sc5': 'Why to Do This Pooja',
            'sc6': ' Garbhadan is conducted to seek divine blessings for a healthy, virtuous, and pious offspring. It is believed to instill positive energy and spiritual consciousness in the unborn child.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Garbhadan is traditionally performed during auspicious planetary alignments or favorable periods according to Vedic astrology.',
            'sc9': 'Benefits',
            'sc10': 'The ceremony is believed to enhance fertility, ensure a safe and healthy pregnancy, and contribute to the overall well-being of the mother and child.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Garbhadan are often suggested by astrologers, aligning with favorable planetary positions.Garbhadan is usually performed in the sanctity of ones home, invoking divine blessings in a tranquil and sacred environment conducive to the spirit of the ritual.'
        },
        {
            'img': '',
            'main': 'Punsvan',
            'subMain': 'Blessing the Maternal Journey',
            'subMain2': ' While specific rituals for Punsvan may not be explicitly mentioned in religious texts, the concept aligns with the broader cultural and Vedic traditions that honor and bless the maternal journey.',
            'sc1': 'Importance',
            'sc2': 'Punsvan is a sacred ceremony acknowledging and blessing the journey of motherhood. It emphasizes the well-being of both the mother and the unborn child during the early stages of pregnancy.',
            'sc3': 'Who Should Do It',
            'sc4': 'This ceremony is typically organized by the family, especially the expectant mother and close relatives, seeking divine blessings for a healthy and safe pregnancy.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Punsvan is performed to invoke divine protection, well-being, and auspiciousness for the unborn child. It is a heartfelt expression of love and devotion for the well-being of both mother and child.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Punsvan is usually conducted during the initial months of pregnancy, aligning with cultural and familial traditions.',
            'sc9': 'Benefits',
            'sc10': 'The ceremony is believed to bring positive energy, protect the mother and unborn child from negative influences, and ensure a smooth and healthy pregnancy.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Ideal timings for Punsvan may vary, but it is often performed during specific auspicious days or planetary alignments.Punsvan is traditionally conducted in the sanctity of the family home, creating a serene and auspicious atmosphere for the expectant mother to receive divine blessings and positive energies.'
        },
        {
            'img': '',
            'main': 'Simantonayayan',
            'subMain': 'Nurturing the Divine Beginning',
            'subMain2': 'Simantonayayan, while not explicitly outlined in religious texts, is rooted in Hindu cultural practices, embodying the essence of Vedic traditions that celebrate the journey of pregnancy.',
            'sc1': 'Importance',
            'sc2': 'Simantonayayan holds great significance as it marks the period of pregnancy, recognizing the sacred responsibility of nurturing a new life. It is a celebration of the expectant mothers journey and the auspiciousness of the upcoming childbirth.',
            'sc3': 'Who Should Do It',
            'sc4': 'This ceremony is typically organized by the family, especially the expectant mother and close relatives, invoking blessings for the well-being of both the mother and the unborn child.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Simantonayayan is performed to invoke divine blessings, protection, and auspiciousness for a smooth and healthy pregnancy. It symbolizes the familys joy and anticipation of the new arrival.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Simantonayayan is usually conducted during the seventh month of pregnancy, aligning with cultural and familial traditions.',
            'sc9': 'Benefits',
            'sc10': 'The ceremony is believed to bring positivity, protect the expectant mother and child, and ensure a safe and healthy delivery.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Simantonayayan may vary, but it is often performed during specific auspicious days or planetary alignments.Simantonayayan is traditionally conducted in the sanctity of the family home or a serene environment, creating a spiritually uplifting atmosphere for the expectant mother to receive divine blessings.'
        },
        {
            'img': '',
            'main': 'Jaatakarm ',
            'subMain': 'Embracing the Arrival of New Life',
            'subMain2': 'Jaatakarm is deeply embedded in Vedic traditions and is inspired by various scriptures that highlight the significance of rituals during and after childbirth.',
            'sc1': 'Importance',
            'sc2': 'Jaatakarm is a sacred ceremony welcoming the newborn into the world, symbolizing the familys joy and gratitude. It is a gesture of invoking divine blessings for the infants well-being and a harmonious start to life.',
            'sc3': 'Who Should Do It',
            'sc4': 'This ceremony is typically organized by the family, especially the parents and close relatives, to express gratitude, seek divine blessings, and introduce the newborn to the familys cultural and spiritual traditions.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Jaatakarm is performed to invoke divine protection, good health, and auspiciousness for the newborn. It is a cultural and familial expression of joy and gratitude for the precious gift of a new life.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Jaatakarm is usually conducted within a few days after the birth of the child, aligning with cultural and familial traditions.',
            'sc9': 'Benefits',
            'sc10': 'The ceremony is believed to bring blessings for the childs well-being, protection, and a prosperous future.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Jaatakarm is often performed at a time deemed spiritually and culturally significant for the family.The ceremony is traditionally held in the family home, creating a warm and sacred environment where the newborn is introduced to the familys cultural and spiritual heritage amidst divine blessings.'
        },
        {
            'img': '',
            'main': 'Namkaran Sanskar ',
            'subMain': 'Bestowing Identity with Sacred Naming',
            'subMain2': 'The tradition of Namkaran Sanskar is deeply rooted in Vedic customs and various Dharmashastra texts, outlining the significance of bestowing a meaningful name on a newborn.',
            'sc1': 'Importance',
            'sc2': 'Namkaran Sanskar holds immense cultural importance as it marks the formal naming ceremony of a newborn. It is a joyous occasion symbolizing the childs entry into the family, community, and the world.',
            'sc3': 'Who Should Do It',
            'sc4': 'This ceremony is typically organized by the family, especially parents and close relatives, to officially name the newborn and seek divine blessings for their prosperous and meaningful life ahead.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Namkaran Sanskar is performed to invoke divine guidance, blessings, and auspiciousness for the childs life journey. It is a cultural and familial expression of love, identity, and tradition.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Namkaran Sanskar is usually conducted a few days after the childs birth, aligning with cultural and familial traditions.',
            'sc9': 'Benefits',
            'sc10': 'The ceremony is believed to bring blessings for the childs future, foster a positive identity, and ensure a harmonious and meaningful life.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Namkaran Sanskar is often performed during specific auspicious days or planetary alignments.The ceremony is traditionally conducted in the family home, creating a loving and sacred atmosphere for the newborns formal introduction to the world and the divine blessings bestowed upon them.'
        },
        {
            'img': '',
            'main': 'Nishkraman Sanskar ',
            'subMain': 'Welcoming the Newborn to the World',
            'subMain2': 'While not explicitly mentioned in specific religious texts, the Nishkraman Sanskar is rooted in the broader cultural and Vedic traditions that recognize the significance of introducing a newborn to the external environment.',
            'sc1': 'Importance',
            'sc2': 'Nishkraman Sanskar is a meaningful ceremony signifying the babys first outing, symbolizing the familys acknowledgment of the childs connection with the world outside the home.',
            'sc3': 'Who Should Do It',
            'sc4': 'This ceremony is usually organized by the family, especially parents and close relatives, to mark the babys first excursion and seek blessings for their well-being.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Nishkraman Sanskar is performed to invoke divine protection, health, and auspiciousness for the newborns initial venture outside the home. It is a cultural and familial expression of joy and gratitude.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Nishkraman Sanskar is conducted during the first few months of the babys life, aligning with cultural and familial traditions.',
            'sc9': 'Benefits',
            'sc10': 'The ceremony is believed to bring blessings for the childs health, protection, and harmonious integration into the external world.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Ideal timings for Nishkraman Sanskar may vary, but it is often performed during specific auspicious days or planetary alignments.The ceremony is traditionally held at home, creating a warm and sacred environment for the babys first interaction with the external world, surrounded by the love and blessings of family members.'
        },
        {
            'img': '',
            'main': 'Annaprashan Sanskar',
            'subMain': 'Commencing the Journey of Solid Food',
            'subMain2': 'Annaprashan Sanskar finds its cultural roots in ancient Hindu practices, with mentions in various Dharmashastra texts that emphasize the introduction of solid food to an infant.',
            'sc1': 'Importance',
            'sc2': 'Annaprashan marks a significant milestone as the baby transitions from a diet of solely milk to the introduction of solid food. It symbolizes the initiation of the child into the world of nourishment beyond mothers milk.',
            'sc3': 'Who Should Do It',
            'sc4': 'This ceremony is typically organized by the family, especially parents and close relatives, to introduce the baby to solid food and seek divine blessings for their health and growth.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Annaprashan Sanskar is performed to invoke divine blessings for the childs healthy growth, well-being, and successful transition to solid food. It is a cultural and familial celebration of the childs developmental journey.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Annaprashan Sanskar is traditionally conducted when the baby is around six months old, aligning with cultural and familial traditions.',
            'sc9': 'Benefits',
            'sc10': 'The ceremony is believed to bring blessings for the childs health, proper digestion, and overall well-being as they embark on the journey of consuming solid food.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Ideal timings for Annaprashan Sanskar may vary, but it is often performed during specific auspicious days or planetary alignments.The ceremony is traditionally held at home, creating a warm and sacred environment for the babys initiation into solid food, surrounded by the love and blessings of family members.'
        },
        {
            'img': '',
            'main': 'Choodakarm Sanskar',
            'subMain': 'Initiating the Sacred Mundan Ceremony',
            'subMain2': 'Choodakarm Sanskar draws inspiration from various Hindu scriptures and cultural traditions that highlight the significance of the Mundan ceremony as a sacred rite of passage.',
            'sc1': 'Importance',
            'sc2': 'Choodakarm is a deeply meaningful ceremony symbolizing the childs symbolic purification and spiritual initiation. It is a sacred ritual marking the first haircut, representing the shedding of impurities and embracing a new beginning.',
            'sc3': 'Who Should Do It',
            'sc4': 'This ceremony is typically organized by the family, especially parents and close relatives, to initiate the child into the cultural and spiritual customs associated with the Mundan ceremony.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Choodakarm Sanskar is performed to seek divine blessings for the childs well-being, protection, and a harmonious transition into the next phase of life. It is a cultural and familial expression of love and devotion.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Choodakarm is traditionally conducted when the child reaches a certain age, often during the first or third year, aligning with cultural and familial traditions.',
            'sc9': 'Benefits',
            'sc10': 'The ceremony is believed to bring blessings for the childs growth, health, and protection from negative influences, symbolizing the beginning of a spiritually enriched life.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Choodakarm Sanskar may vary, but it is often performed during specific auspicious days or planetary alignments.The ceremony is traditionally conducted in the sanctity of the family home or at a sacred place, creating a spiritually uplifting atmosphere for the childs initiation into this significant cultural tradition.'
        },
        {
            'img': '',
            'main': 'Karnvedh Sanskar ',
            'subMain': 'Blessing the Ears with Divine Vibrations',
            'subMain2': 'The roots of Karnvedh Sanskar lie in ancient Hindu traditions and cultural practices, with mentions in various Dharmashastra texts highlighting the significance of piercing the ears for spiritual and cultural reasons.',
            'sc1': 'Importance',
            'sc2': 'Karnvedh is a sacred ceremony symbolizing the opening of the ears to divine wisdom and protection. It is a cultural and spiritual ritual that brings blessings for the childs intellect, understanding, and protection from negative energies.',
            'sc3': 'Who Should Do It',
            'sc4': 'This ceremony is typically organized by the family, especially parents and close relatives, to initiate the child into the cultural and spiritual customs associated with Karnvedh Sanskar.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Karnvedh Sanskar is performed to seek divine blessings for the childs intellectual development, protection from negative influences, and fostering a deeper connection with spiritual wisdom.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Karnvedh is traditionally conducted during early childhood, aligning with cultural and familial traditions.',
            'sc9': 'Benefits',
            'sc10': 'The ceremony is believed to enhance the childs learning abilities, promote spiritual growth, and protect against negative influences.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Ideal timings for Karnvedh Sanskar may vary, but it is often performed during specific auspicious days or planetary alignments.The ceremony is traditionally conducted at home or in a sacred place, creating a spiritually uplifting atmosphere for the childs initiation into this significant cultural tradition. '
        },
        {
            'img': '',
            'main': 'Vidyarambha',
            'subMain': 'Commencing the Journey of Knowledge',
            'subMain2': 'The tradition of Vidyarambha is inspired by various Dharmashastra texts and is deeply rooted in Vedic traditions that emphasize the initiation of a child into the world of education.',
            'sc1': 'Importance',
            'sc2': 'Vidyarambha is a sacred initiation ceremony, marking the formal beginning of a childs education journey. It is a cultural and spiritual rite that instills the value of learning and knowledge-seeking.',
            'sc3': 'Who Should Do It',
            'sc4': 'This ceremony is typically organized by parents and family members, signaling the childs readiness to embark on their educational journey.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Vidyarambha is performed to seek divine blessings for the childs successful and auspicious pursuit of knowledge. It is a cultural and familial expression of the importance of education in ones life.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Vidyarambha is usually conducted when a child is about to start formal education, often around the age of three to five years.',
            'sc9': 'Benefits',
            'sc10': 'The ceremony is believed to bring blessings for the childs academic success, intellectual growth, and a lifelong love for learning.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Vidyarambha is often performed during specific auspicious days or planetary alignments.The ceremony is traditionally held in the family home or a place of learning, creating a conducive and spiritually charged environment for the childs initiation into the world of knowledge. '
        }
        ,
        {
            'img': '',
            'main': 'Upnayan',
            'subMain': 'Embracing the Sacred Thread Ceremony',
            'subMain2': 'The Upnayan, or Upanayana, ceremony finds its roots in ancient Hindu scriptures, particularly the sacred texts known as the Vedas. It is a significant rite of passage mentioned in the Dharma Shastras.',
            'sc1': 'Importance',
            'sc2': 'Upnayan marks the sacred thread ceremony, symbolizing the initiation of a young boy into the study of the Vedas and the pursuit of knowledge. It signifies the beginning of a new phase of life.',
            'sc3': 'Who Should Do It',
            'sc4': 'This ceremony is traditionally performed for boys of certain Hindu communities, typically between the ages of 7 and 16, signifying their readiness for Vedic education.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Upnayan is conducted to instill values of discipline, learning, and spirituality in the individual. It is a pivotal step toward their intellectual and spiritual growth.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'The ceremony is often performed during specific astrologically auspicious times, such as on auspicious days or during the transition to a new educational phase.',
            'sc9': 'Benefits',
            'sc10': 'Upnayan is believed to confer blessings for educational success, spiritual awakening, and overall personal development.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Early morning is considered auspicious for the Upnayan ceremony.Upnayan is typically conducted at home or in a peaceful, sacred environment such as a temple or ashram, aligning with the spiritual nature of the ceremony.'
        }
        ,
        {
            'img': '',
            'main': 'Vedarambh Sanskar ',
            'subMain': 'Commencing the Journey of Vedic Learning',
            'subMain2': 'Vedarambh Sanskar is deeply rooted in Vedic traditions and finds mention in various ancient scriptures that emphasize the initiation of a child into the world of Vedic education.',
            'sc1': 'Importance',
            'sc2': 'Vedarambh holds great cultural and spiritual significance as it marks the formal commencement of a childs education in Vedic knowledge, symbolizing the pursuit of wisdom, spirituality, and divine understanding.',
            'sc3': 'Who Should Do It',
            'sc4': 'This ceremony is typically organized by the family, especially parents and close relatives, to initiate the child into the sacred path of Vedic learning.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'This Pooja Vedarambh Sanskar is performed to seek divine blessings for the childs successful journey into the realms of Vedic education, intellectual growth, and spiritual understanding.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'This Pooja Vedarambh is traditionally conducted when the child is ready to embark on their educational journey, often during the early years of schooling.',
            'sc9': 'Benefits',
            'sc10': 'The ceremony is believed to bring blessings for the childs academic success, spiritual growth, and a deep understanding of Vedic principles.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Vedarambh Sanskar may vary, but it is often performed during specific auspicious days or planetary alignments.The ceremony is traditionally held at home or in a sacred place conducive to learning, creating a spiritually enriched environment for the childs initiation into Vedic education.'
        }
        ,
        {
            'img': '',
            'main': 'Keshant Sanskar',
            'subMain': 'Embracing the Sacred First Haircut',
            'subMain2': 'Keshant Sanskar is inspired by ancient Hindu traditions and various Dharmashastra texts that highlight the cultural and spiritual significance of the first haircut, symbolizing a childs growth and purity.',
            'sc1': 'Importance',
            'sc2': 'Keshant marks a significant milestone in a childs life, symbolizing the removal of impurities and the beginning of a new phase of growth. It is a sacred ritual celebrating the childs journey from infancy to a more conscious existence.',
            'sc3': 'Who Should Do It',
            'sc4': 'This ceremony is typically organized by the family, especially parents and close relatives, to initiate the child into the cultural and spiritual customs associated with the first haircut.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Keshant Sanskar is performed to seek divine blessings for the childs well-being, purity, and a harmonious transition into the next phase of life. It is a cultural and familial expression of love and devotion.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Keshant is traditionally conducted when the child reaches a certain age, often during the first or third year, aligning with cultural and familial traditions.',
            'sc9': 'Benefits',
            'sc10': 'The ceremony is believed to bring blessings for the childs growth, health, and protection from negative influences, symbolizing the beginning of a spiritually enriched life.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Keshant Sanskar may vary, but it is often performed during specific auspicious days or planetary alignments.The ceremony is traditionally conducted in the sanctity of the family home or at a sacred place, creating a spiritually uplifting atmosphere for the childs initiation into this significant cultural tradition.'
        }
        ,
        {
            'img': '',
            'main': 'Samavartan Sanskar ',
            'subMain': 'Culmination of Academic Pursuits',
            'subMain2': 'Samavartan Sanskar finds its roots in Vedic traditions and is associated with various ancient scriptures that emphasize the completion of formal education and the transition to the next phase of life.',
            'sc1': 'Importance',
            'sc2': 'Samavartan holds cultural and spiritual significance, marking the end of formal education and the commencement of a new journey. It symbolizes the completion of academic pursuits and the readiness for broader responsibilities.',
            'sc3': 'Who Should Do It',
            'sc4': 'This ceremony is typically organized by the family, especially parents and close relatives, to celebrate the academic achievements of the individual and prepare them for the responsibilities of the next phase of life.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Samavartan Sanskar is performed to seek divine blessings for a successful transition into adulthood, wisdom, and a purposeful life. It is a cultural and familial expression of joy and accomplishment.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Samavartan is traditionally conducted upon the completion of formal education, often after completing university or a significant academic milestone.',
            'sc9': 'Benefits',
            'sc10': 'The ceremony is believed to bring blessings for the individuals future endeavors, wisdom, and a smooth transition into the next phase of life.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Ideal timings for Samavartan Sanskar may vary, but it is often performed during specific auspicious days or planetary alignments.The ceremony is traditionally held at home or in a sacred place, creating a spiritually enriched environment to mark the completion of academic achievements and the beginning of a new life chapter.'
        }
        ,
        {
            'img': '',
            'main': 'Sacred Marriage',
            'subMain': 'Vivaah Sanskar - Sacred Union and New Beginnings',
            'subMain2': 'The concept of Vivaah Sanskaar, or the Hindu wedding ceremony, finds its roots in the ancient Vedic scriptures and religious texts, primarily the Rigveda and the Manusmriti. It outlines the customs, rituals, and significance of marriage in Hindu culture.',
            'sc1': 'Importance',
            'sc2': 'Sanskaar is a profoundly important life event in Hinduism. It symbolizes the union of two souls, the coming together of families, and the start of a new journey filled with love, companionship, and shared responsibilities.',
            'sc3': 'Who Should Do It',
            'sc4': 'This sacred ceremony is for couples embarking on the journey of marriage. It brings together not just the bride and groom but their families and communities, signifying the joining of two lives in a spiritual bond.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Vivaah Sanskaar is performed to seek divine blessings, ensuring a harmonious and prosperous married life. It is a way to invoke the grace of the divine for a sacred union filled with love and understanding.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'The timing is typically determined by the couple and their families. Its often scheduled on auspicious days or during the wedding season, as per the Hindu calendar.',
            'sc9': 'Benefits',
            'sc10': 'The Vivaah Sanskaar unites two souls in the bond of matrimony, bringing love, happiness, and prosperity. It sets the foundation for a strong and fulfilling married life.',
            'sc11': 'Best Time and Place ',
            'sc12': 'The Vivaah Sanskaar is usually performed in a traditional setting, such as a temple or a sacred location with religious significance. The best time often aligns with astrologically auspicious periods, and the rituals can vary depending on regional customs and traditions.'
        },
        {
            'img': '',
            'main': 'Antyeshti',
            'subMain': 'Antyeshti - Honoring the Departed with Sacred Farewell',
            'subMain2': 'Antyeshti, the funeral rites, finds its mention in various Dharmashastra texts and Vedic scriptures, guiding the process of bidding farewell to departed souls.',
            'sc1': 'Importance',
            'sc2': 'Antyeshti is a solemn and essential ceremony, honoring the departed and guiding their soul toward its next journey. It is a vital ritual for ensuring a peaceful transition and expressing reverence for the departed soul.',
            'sc3': 'Who Should Do It',
            'sc4': 'The Antyeshti ceremony is typically organized by the family and close relatives of the deceased, seeking to fulfill their duty and provide a dignified farewell.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Antyeshti is performed to guide the departed soul through its journey and to express love and gratitude. It is a cultural and familial expression of respect for the departed and acknowledgment of lifes cyclical nature.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'Antyeshti is conducted soon after the passing, aligning with cultural and familial traditions.',
            'sc9': 'Benefits',
            'sc10': 'The ceremony is believed to ensure a smooth transition for the departed soul, offering solace to the grieving family, and fostering a sense of closure.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Antyeshti is often performed with respect to cultural customs and practical considerations.Antyeshti is often conducted at dedicated cremation grounds or funeral homes, it is the intent and sincerity that make the place sacred, ensuring a peaceful and respectful farewell for the departed soul.'
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