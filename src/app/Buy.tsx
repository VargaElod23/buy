import { createThirdwebClient, defineChain } from "thirdweb";
import { ThirdwebProvider, ConnectButton, PayEmbed } from "thirdweb/react";
import { BackgroundLines } from "./components/BgLines";

const clientId = process.env.THIRDWEB_CLIENT_ID;

if (!clientId) {
  throw new Error("THIRDWEB_CLIENT_ID  must be set");
}

const client = createThirdwebClient({
  clientId,
});

export default function BuyPage() {
  return (
    <ThirdwebProvider>
      <BackgroundLines>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl border-b">
            Buy Taraxa
          </h1>
          <PayEmbed
            client={client}
            payOptions={{
              prefillBuy: {
                chain: defineChain(841),
                amount: "100000",
              },
            }}
          />
          <div style={{ position: "absolute", top: 5, right: 5 }}>
            <ConnectButton client={client} />
          </div>
        </div>
      </BackgroundLines>
    </ThirdwebProvider>
  );
}
