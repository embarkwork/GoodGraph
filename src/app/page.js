import ChatAnimation from '../components/ChatAnimation';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
            <div className="relative" style={{margin: "30px"}}>
              <div className="relative animate-float" style={{ animationDelay: '-2s' }}>
                <ChatAnimation />
              </div>
            </div>
          </div>
  );
}