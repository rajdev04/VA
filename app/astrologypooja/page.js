import React from 'react'
import Nav from '@/app/components/nav'
import Link from 'next/link'



const page = () => {
    const arr = [
        {
            'img': 'yaadein135.jpg',
            'main': 'Naugrah Shanti Poojan ',
            'subMain': 'Harmonizing Celestial Influences',
            'subMain2': 'The practice of Naugrah Shanti Poojan is rooted in Vedic astrology and references various astrological texts that prescribe rituals to appease the celestial bodies (Navagrahas) for positive influences.',
            'sc1': 'Importance',
            'sc2': 'Naugrah Shanti holds immense astrological significance as it aims to mitigate the adverse effects of planetary positions and enhance the positive energies associated with the Navagrahas. It seeks to bring harmony between cosmic forces and individual life.',
            'sc3': 'Who Should Do It',
            'sc4': 'Individuals facing challenges attributed to unfavorable planetary positions or seeking overall well-being often undertake Naugrah Shanti Poojan. Astrologers and seekers of celestial guidance also engage in this ritual.',
            'sc5': 'Why to Do This Pooja',
            'sc6': ' Naugrah Shanti Poojan is performed to seek blessings for mental and physical well-being, success, and prosperity by aligning oneself with positive cosmic energies and mitigating negative influences.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'The timing for Naugrah Shanti is often determined by astrological considerations, emphasizing specific planetary alignments or auspicious periods for optimal results.',
            'sc9': 'Benefits',
            'sc10': 'The ritual is believed to bring relief from planetary afflictions, enhance positive energies, promote overall well-being, and pave the way for success and prosperity.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Naugrah Shanti Poojan may vary based on individual astrological assessments, emphasizing specific planetary transits.The pooja is traditionally conducted in sacred spaces or at home, creating an atmosphere conducive to connecting with the divine and seeking celestial blessings for harmonizing ones life path.'
        },
        {
            'img': '',
            'main': 'Kaal Sarp Yog Pooja ',
            'subMain': 'Mitigating Celestial Serpent Afflictions',
            'subMain2': 'The practice of Kaal Sarp Yog Pooja finds its basis in Hindu astrology, with references in ancient scriptures like the "Brihat Parashara Hora Shastra" that discuss the impact of the serpent-like planetary configuration on individuals.',
            'sc1': 'Importance',
            'sc2': 'Kaal Sarp Yog Pooja holds significant astrological importance as it aims to pacify the adverse effects associated with the Kaal Sarp Yog, a celestial alignment believed to create challenges and obstacles in ones life.',
            'sc3': 'Who Should Do It',
            'sc4': 'Individuals experiencing difficulties attributed to Kaal Sarp Yog in their birth chart often opt for this pooja. It is recommended for those seeking relief from associated challenges in various aspects of life.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Pooja Kaal Sarp Yog Pooja is performed to seek divine intervention and alleviate the negative influences of the celestial serpent alignment. It is believed to bring harmony, peace, and positive transformations.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'The timing for Kaal Sarp Yog Pooja is often determined by astrological considerations, emphasizing specific planetary transits or auspicious periods for optimal results.',
            'sc9': 'Benefits',
            'sc10': 'The ritual is believed to neutralize the adverse effects of Kaal Sarp Yog, fostering personal and professional growth, reducing obstacles, and promoting overall well-being.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Kaal Sarp Yog Pooja may vary based on individual astrological assessments, aligning with specific celestial configurations for enhanced efficacy.The pooja is traditionally conducted in sacred spaces or at revered temples, creating an atmosphere conducive to seeking celestial blessings and mitigating the impact of Kaal Sarp Yog.'
        },
        {
            'img': '',
            'main': 'Rahu-Ketu Shaanti Pooja',
            'subMain': 'Aligning Energies for Celestial Harmony',
            'subMain2': 'Rooted in Vedic astrology, the Rahu-Ketu Shaanti Pooja draws inspiration from ancient texts like the "Brihat Parashara Hora Shastra" that detail the influences of Rahu and Ketu in an individuals birth chart.',
            'sc1': 'Importance',
            'sc2': 'This pooja holds immense significance as it aims to appease and harmonize the energies of Rahu and Ketu, two shadowy planets believed to influence various aspects of life, including career, relationships, and mental well-being.',
            'sc3': 'Who Should Do It',
            'sc4': 'Individuals facing challenges associated with Rahu and Ketu in their astrological charts, seeking balance, stability, and relief from negative influences, often opt for this pooja.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Pooja Rahu-Ketu Shaanti Pooja is performed to seek divine intervention, alleviate the adverse effects of these planets, and foster positive transformations in life.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'The timing is often determined by astrological considerations, emphasizing specific planetary transits or auspicious periods for optimal results.',
            'sc9': 'Benefits',
            'sc10': 'The ritual is believed to neutralize the malefic influences of Rahu and Ketu, promoting mental clarity, career success, and harmonious relationships.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Rahu-Ketu Shaanti Pooja may vary based on individual astrological assessments, aligning with specific celestial configurations for enhanced efficacy.Traditionally conducted in sacred spaces or at revered temples, this pooja creates an environment conducive to seeking celestial blessings and mitigating the impact of Rahu and Ketu in ones life.'
        },
        {
            'img': '',
            'main': 'Rin Mukti Pooja',
            'subMain': 'Liberating from Debts and Burdens',
            'subMain2': 'The concept of Rin Mukti is rooted in Vedic wisdom, with references in texts like the "Garuda Purana," outlining rituals to free oneself from karmic debts and financial burdens.',
            'sc1': 'Importance',
            'sc2': 'Rin Mukti Pooja is of profound importance, aiming to alleviate the karmic debts that may obstruct personal and financial growth. It addresses the spiritual and material aspects of life, offering liberation from financial constraints.',
            'sc3': 'Who Should Do It',
            'sc4': 'Individuals burdened by financial debts, seeking relief from karmic obligations, and striving for financial stability often choose Rin Mukti Pooja to attract positive energies and opportunities.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Rin Mukti Pooja is performed to seek divine blessings for debt liberation, financial stability, and overall prosperity. It is a spiritual endeavor to overcome financial challenges and foster abundance.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'The timing is often chosen strategically, considering personal astrological charts, auspicious periods, or specific financial situations for optimal results.',
            'sc9': 'Benefits',
            'sc10': 'The ritual is believed to attract positive energies for debt clearance, financial prosperity, and overall well-being, allowing individuals to experience a more balanced and harmonious life.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Rin Mukti Pooja may vary, aligning with astrological considerations or specific financial milestones for enhanced efficacy.Traditionally conducted in sacred spaces or at revered temples, Rin Mukti Pooja creates an environment conducive to seeking divine blessings and liberation from financial burdens.'
        },
        {
            'img': '',
            'main': 'Grahshanti Poojan',
            'subMain': 'Harmonizing Planetary Influences',
            'subMain2': 'Rooted in Vedic astrology, Grahshanti Poojan draws inspiration from ancient texts like the "Brihat Parashara Hora Shastra" and various astrological scriptures that detail rituals to pacify malefic planetary influences.',
            'sc1': 'Importance',
            'sc2': 'Grahshanti Poojan is of paramount importance as it seeks to harmonize and appease the celestial bodies, mitigating the adverse effects of malefic planetary positions and promoting positive energies in ones life.',
            'sc3': 'Who Should Do It',
            'sc4': 'Individuals facing challenges attributed to unfavorable planetary alignments in their astrological charts, seeking overall well-being, peace, and prosperity, often opt for Grahshanti Poojan.',
            'sc5': 'Why to Do This Pooja',
            'sc6': 'Grahshanti Poojan is performed to seek divine blessings for planetary pacification, relief from astrological afflictions, and to enhance positive energies for a more balanced and harmonious life.',
            'sc7': 'When to Do This Pooja',
            'sc8': 'The timing is often determined by astrological considerations, emphasizing specific planetary transits or auspicious periods for optimal results.',
            'sc9': 'Benefits',
            'sc10': 'The ritual is believed to neutralize malefic planetary influences, fostering mental clarity, physical well-being, and overall success in various life endeavors.',
            'sc11': 'Best Time and Place ',
            'sc12': 'Grahshanti Poojan may vary based on individual astrological assessments, aligning with specific celestial configurations for enhanced efficacy.Traditionally conducted in sacred spaces or at revered temples, Grahshanti Poojan creates an environment conducive to seeking celestial blessings and mitigating the impact of planetary influences.'
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