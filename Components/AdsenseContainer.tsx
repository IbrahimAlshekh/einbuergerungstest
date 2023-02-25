'use client'
import { useEffect } from 'react';
interface Props {
  client: string | undefined;
  slot: string | undefined;
}
export default function AdsenseContainer ( { client, slot }: Props) {

  useEffect(() => {
    // @ts-ignore
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div
      style={{textAlign: 'left',overflow: 'hidden'}}
    >
      <div style={{fontSize: '12px'}}>Advertisment</div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}