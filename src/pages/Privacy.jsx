import LegalPage from './LegalPage'
import { company } from '../data/site'

/**
 * Privacy Policy page. General, good-practice content for a pharmaceutical /
 * nutraceutical company website — review with legal counsel before relying on
 * it for compliance in a specific jurisdiction.
 */
export default function Privacy() {
  const sections = [
    {
      heading: 'Information We Collect',
      body: [
        'We collect information you provide directly to us — for example when you submit an enquiry, request product information or contact us. This may include:',
        {
          list: [
            'Your name, email address and phone number',
            'Your company or organisation, where relevant',
            'The content of any message or enquiry you send us',
          ],
        },
        'We also automatically collect limited technical information — such as your browser type, device and pages visited — through cookies and similar technologies to help the site function and improve.',
      ],
    },
    {
      heading: 'How We Use Your Information',
      body: [
        'We use the information we collect to:',
        {
          list: [
            'Respond to your enquiries and provide the information or support you request',
            'Communicate with you about our products, partnerships and services',
            'Operate, maintain and improve our website and its content',
            'Comply with applicable legal, regulatory and pharmacovigilance obligations',
          ],
        },
      ],
    },
    {
      heading: 'No Medical Advice',
      body: [
        'The information on this website is provided for general informational purposes only and is not a substitute for professional medical advice, diagnosis or treatment. Always consult a qualified physician or pharmacist before taking any medicine. Never disregard professional medical advice because of something you have read on this site.',
      ],
    },
    {
      heading: 'How We Share Information',
      body: [
        'We do not sell your personal information. We may share it only with:',
        {
          list: [
            'Service providers who help us operate our website and communications, under confidentiality obligations',
            'Regulatory authorities where required by law or for product-safety reporting',
            'Professional advisers such as auditors and legal counsel, where necessary',
          ],
        },
      ],
    },
    {
      heading: 'Cookies',
      body: [
        'Our website uses cookies to remember your preferences and understand how the site is used. You can control or disable cookies through your browser settings, though some parts of the site may not function as intended without them.',
      ],
    },
    {
      heading: 'Data Security',
      body: [
        'We apply reasonable technical and organisational measures to protect the information we hold against loss, misuse and unauthorised access. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
      ],
    },
    {
      heading: 'Your Rights',
      body: [
        'Subject to applicable law, you may request access to, correction of, or deletion of the personal information we hold about you, and you may object to certain uses of it. To exercise these rights, contact us using the details below.',
      ],
    },
    {
      heading: 'Changes to This Policy',
      body: [
        `We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last updated" date. Your continued use of the website after changes are posted constitutes acceptance of the updated policy.`,
      ],
    },
  ]

  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy"
      highlight="Policy"
      subtitle={`How ${company.name} collects, uses and protects your information.`}
      seoTitle="Privacy Policy"
      seoDescription={`Privacy Policy for the ${company.name} website — what personal information we collect, how we use and protect it, and the choices you have.`}
      updated="2 July 2026"
      intro={`${company.legalName} ("we", "us" or "our") respects your privacy and is committed to protecting the personal information you share with us. This policy explains what we collect, how we use it and the choices you have.`}
      sections={sections}
    />
  )
}
