import ChatAnimation from '../components/ChatAnimation';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">              
    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/5 to-accent/5 rounded-2xl transform -rotate-6" style={{
      width: "85%",
      maxWidth: "700px",
      margin: "40px auto",
      maxHeight: "550px",
      height: "100vh"
        }}></div>
            <div className="relative" style={{margin: "30px 50px"}}>
              <div className="relative animate-float" style={{ animationDelay: '-2s' }}>
                <ChatAnimation />
              </div>
            </div>
          </div>
  );
}