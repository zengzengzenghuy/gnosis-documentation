/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  overview: [{type: 'autogenerated', dirName: 'overview'}],
  
  quickstart: [{type: 'autogenerated', dirName: 'quick-start'}], 
  
  validators: [
    'validators/README',
    'validators/incentives',
    {
      type: 'category',
      label: 'Get Started',
      collapsed: false,
      link: {type: 'doc', id: 'validators/get-started/README'},
      items: [
        "validators/get-started/responsibilities",
        "validators/get-started/technical-requirements",
        "validators/get-started/setup-gnosis-chain-node",
      ],
    },
    {
      type: 'category',
      label: 'Client setup',
      collapsed: true,
      link: {type: 'doc', id: 'validators/client/README'},
      items: [
        "validators/client/lighthouse",
        "validators/client/nimbus",
        "validators/client/prysm",
        "validators/client/nethermind-node-setup",
        "validators/client/connect-to-a-gc-node",
        "validators/client/node-monitoring",
        "validators/client/migrate-clients",
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      collapsed: true,
      //link: {type: 'doc', id: 'validators/operations/README'},
      items: [
        "validators/operations/README",
        "validators/operations/deposit-safety-instructions",
        "validators/operations/manual-deposit-method",
        "validators/operations/convert-gno-to-mgno",
        "validators/operations/validator-withdrawals",
        "validators/operations/voluntary-exit",
        "validators/operations/migrating-a-validator",
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      collapsed: true,
      items: [
        {
          type: 'link',
          label: 'Explorer',
          href: 'https://beacon.gnosischain.com/',
        },
        'validators/beacon-chain-analytics',
        {
          type: 'link',
          label: 'Deposit Tool',
          href: 'https://deposit.gnosischain.com/',
        },
        'validators/tools/liquid-staking',
      ],
    },
    'validators/security-audit',
    {
      type: 'link',
      label: 'Landing Page',
      href: 'https://www.gnosischain.com/',
    },
    'validators/media-kit',
    'validators/faq',
  ],



  bridge: [{type: 'autogenerated', dirName: 'bridge'}],

};

module.exports = sidebars;