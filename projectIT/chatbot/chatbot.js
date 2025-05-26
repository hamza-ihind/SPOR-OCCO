document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    function appendMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');

        const avatarSpan = document.createElement('span');
        avatarSpan.classList.add('avatar');
        avatarSpan.textContent = sender === 'user' ? '👤' : '🤖'; // User or Bot avatar

        const messageContentDiv = document.createElement('div');
        messageContentDiv.classList.add('message-content');
        messageContentDiv.textContent = message;

        messageDiv.appendChild(avatarSpan);
        messageDiv.appendChild(messageContentDiv);
        chatMessages.appendChild(messageDiv);

        // Scroll to the bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;

        appendMessage('user', message);
        userInput.value = ''; // Clear input

        // --- THIS IS WHERE YOU WOULD INTEGRATE A REAL AI API ---
        // For demonstration, we'll simulate a bot response after a short delay.
        // In a real application, you would make an API call to an LLM like Google Gemini or OpenAI's ChatGPT.

        // Example of a placeholder for an AI API call:
        // const botResponse = await getAIResponse(message);
        // appendMessage('bot', botResponse);

        // Simulated AI response for demonstration
        setTimeout(() => {
            let botResponse = "I'm not sure how to respond to that yet. I'm just a simple demo!";
            if (message.toLowerCase().includes("hello") || message.includes("hi")) {
                botResponse = "Hello there! How can I assist you?";
            } else if (message.toLowerCase().includes("how are you")) {
                botResponse = "I'm doing great as an AI, thanks for asking!";
            } else if (message.toLowerCase().includes("what is your name")) {
                botResponse = "I am an AI assistant, I don't have a name.";
            } else if (message.toLowerCase().includes("date") || message.includes("what is date") || message.includes("what is a date")) {
                const now = new Date();
                botResponse = `Today is ${now.toLocaleDateString()} and the time is ${now.toLocaleTimeString()}.`;
            } else if (message.toLowerCase().includes("what is agadir")){
                botResponse = "Agadir is a city located in southwestern Morocco, along the Atlantic Ocean, near the foot of the Anti-Atlas Mountains. It's a major tourist destination, commercial port, and regional capital of the Souss-Massa region."
            } else if (message.toLowerCase().includes("description of agadir") || message.includes("description for agadir") || message.includes("discription of agadir") || message.includes("discription for agadir")){
                botResponse = "Agadir is a modern coastal city in southwest Morocco, located along the shores of the Atlantic Ocean. Known for its beautiful sandy beaches, mild climate, and relaxed atmosphere, Agadir is one of the country’s most popular tourist destinations.Rebuilt after a devastating earthquake in 1960, Agadir has wide streets, modern buildings, and a clean, organized layout. It offers a mix of seaside resorts, lively markets like Souk El Had, and cultural sites such as the Kasbah of Agadir Oufella, which provides panoramic views of the city.Agadir is also an important economic center, especially for fishing, agriculture, and tourism. With its mix of modern life, natural beauty, and Amazigh (Berber) culture, Agadir offers visitors a unique experience in southern Morocco."
            }else if (message.toLowerCase().includes("what is ai") || message.toLowerCase().includes("define artificial intelligence")) {
                botResponse = "Artificial Intelligence (AI) is a broad branch of computer science focused on building machines capable of performing tasks that typically require human intelligence.";
            } else if (message.toLowerCase().includes("main goal of ai") || message.toLowerCase().includes("why do we need ai")) {
                botResponse = "The main goal of AI is to enable machines to perceive, reason, learn, and act in ways that mimic or surpass human cognitive abilities.";
            } else if (message.toLowerCase().includes("strong ai vs weak ai") || message.toLowerCase().includes("difference between narrow and general ai")) {
                botResponse = "Weak AI (or Narrow AI) is designed and trained for a specific task, while Strong AI (or General AI) would possess all the cognitive abilities of a human and could apply intelligence to any problem.";
            } else if (message.toLowerCase().includes("description of Talborjt")){
                botResponse = "Talborjt (تلبورجت) is one of the most iconic and culturally rich neighborhoods in Agadir, Morocco. Once the historic heart of the city before the devastating 1960 earthquake, Talborjt was completely rebuilt and now stands as a symbol of Agadir’s resilience and modern rebirth."
            } else if (message.toLowerCase().includes("description of anza")){
                botResponse = "Anza is a coastal neighborhood located just north of Agadir, Morocco. Once a modest fishing village, it has evolved into a vibrant area known for its rich cultural heritage, natural attractions, and diverse recreational activities."
            } else if (message.toLowerCase().includes("description of hay mohammadi")){
                botResponse = "Hay Mohammadi is a prominent urban development located in the northeast of Agadir, Morocco. Initiated in 2002 to address the city's housing deficit, the area spans approximately 465 hectares and was designed to accommodate around 100,000 residents. By 2007, inhabitants began settling in the neighborhood, which continues to evolve and expand."
            } else if (message.toLowerCase().includes("description of dakhla")){
                botResponse = "Dakhla (الداخلة) is one of the largest and most dynamic residential neighborhoods in Agadir, Morocco. It is known for its affordable housing, active community life, and practical amenities, making it a favorite among families, students, and working-class residents."
            } else if (message.toLowerCase().includes("description of al houda")){
                botResponse = "Al Houda, also known as Cité El Houda, is a dynamic residential neighborhood situated in the southern part of Agadir, Morocco. Positioned near the Ibn Zohr University, it boasts a diverse mix of modern apartment complexes, medium-sized villas, and affordable housing options, making it a popular choice for students, families, and professionals alike."
            } else if (message.toLowerCase().includes("description of haut fount")){
                botResponse = "Haut Founty (فونتي العليا) is one of the most modern and rapidly developing residential neighborhoods in Agadir, Morocco. Located just inland from the beachside district of Founty, it’s known for its quiet, upscale atmosphere, well-planned streets, and growing popularity among professionals, families, and investors."
            } else if (message.toLowerCase().includes("description of hay salam")){
                botResponse = "Hay Salam is a vibrant residential neighborhood situated in the southern part of Agadir, Morocco. Known for its family-friendly environment, it offers a blend of modern amenities and traditional Moroccan charm."
            } else if (message.toLowerCase().includes("description of fount")){
                botResponse = "Founty (فونتي) is one of the most modern and upscale neighborhoods in Agadir, Morocco, located just a short walk from the city’s famous beach and coastline. Known for its quiet streets, luxury accommodations, and beachside ambiance, Founty is often the go-to area for tourists and upper-class residents alike."
            } else if (message.toLowerCase().includes("description of bensergao")){
                botResponse = "Bensergao is a dynamic district located on the outskirts of Agadir, Morocco. It seamlessly blends traditional Berber heritage with modern amenities, offering both residents and visitors a rich tapestry of cultural, recreational, and natural attractions."
} else if (message.toLowerCase().includes("activities of bensergao")){
    botResponse = "Cultural Highlights/Outdoor Recreation/Unique Experiences/Community and Events"
} else if (message.toLowerCase().includes("activities of hay salam")){
    botResponse = "Community and Living/Shopping and Amenities/Nearby Attractions and Activities/Accommodation Options"
} else if (message.toLowerCase().includes("activities of founty")){
    botResponse = "Resort Stays/Beach Activities/Dine by the Sea/Sunset Views/Wellness and Spa"
} else if (message.toLowerCase().includes("activities of haut founty")){
    botResponse = "Wellness and Fitness/Upscale Dining and Cafés/Local Shopping/Family-Friendly Spaces/Business and Professional Services"
} else if (message.toLowerCase().includes("activities of al Houda")){
    botResponse = "Community and Daily Life/Shopping and Markets/Educational and Study Spaces/Local Commerce and Services/Recreational Activities"
} else if (message.toLowerCase().includes("activities of dakhla")){
    botResponse = "Business and Professional Services/Cafés and Social Life/Affordable Local Eateries/Proximity to Universities/Walking and Socializing"
} else if (message.toLowerCase().includes("activities of talborjt")){
    botResponse = "Local Shopping/Café Culture/Live Music & Events/Visit Mohamed V Mosque/Relax in Public Gardens"
} else if (message.toLowerCase().includes("activities of hay mohammadi")){
    botResponse = "Adrar Stadium/Kooraland Academy/Maroc Racing Kart/Club Moov’UP Fitness/SHYVA Wellness"
} else if (message.toLowerCase().includes("activities of anza")){
    botResponse = "Anza Beach: Surfing and Natural Wonders/Family-Friendly Attractions/Outdoor Adventures/Local Culture and Cuisine/Scenic Views and Relaxation"
} else if (message.toLowerCase().includes("what is machine learning") || message.toLowerCase().includes("explain ml")) {
    botResponse = "Machine Learning (ML) is a subset of AI that allows systems to learn from data without being explicitly programmed. It uses algorithms to identify patterns and make predictions.";
} else if (message.toLowerCase().includes("what is deep learning") || message.toLowerCase().includes("explain deep neural networks")) {
    botResponse = "Deep Learning (DL) is a subset of Machine Learning that uses artificial neural networks with multiple layers (deep neural networks) to learn from vast amounts of data. It's particularly effective for complex pattern recognition.";
} else if (message.toLowerCase().includes("what is nlp") || message.toLowerCase().includes("explain natural language processing")) {
    botResponse = "Natural Language Processing (NLP) is a branch of AI that focuses on enabling computers to understand, interpret, and generate human language.";
} else if (message.toLowerCase().includes("what is computer vision") || message.toLowerCase().includes("explain cv")) {
    botResponse = "Computer Vision (CV) is an AI field that enables computers to 'see' and interpret visual information from the world, like images and videos.";
} else if (message.toLowerCase().includes("what is robotics") || message.toLowerCase().includes("ai in robots")) {
    botResponse = "Robotics is a field that combines engineering and computer science to design, build, and operate robots. AI is often integrated into robots to give them intelligence for tasks like navigation and decision-making.";
} else if (message.toLowerCase().includes("what is reinforcement learning") || message.toLowerCase().includes("explain rl")) {
    botResponse = "Reinforcement Learning (RL) is a type of machine learning where an agent learns to make decisions by performing actions in an environment to maximize a cumulative reward.";
} else if (message.toLowerCase().includes("what is supervised learning") || message.toLowerCase().includes("explain supervised ml")) {
    botResponse = "Supervised learning is an ML approach where a model learns from labeled training data. The model is given input data and corresponding correct outputs, and it learns to map inputs to outputs.";
} else if (message.toLowerCase().includes("what is unsupervised learning") || message.toLowerCase().includes("explain unsupervised ml")) {
    botResponse = "Unsupervised learning is an ML approach where a model learns from unlabeled data. It tries to find hidden patterns or structures in the input data without predefined output labels.";
} else if (message.toLowerCase().includes("what is semi-supervised learning") || message.toLowerCase().includes("explain semi-supervised ml")) {
    botResponse = "Semi-supervised learning is an ML approach that uses a combination of both labeled and unlabeled data for training. It's useful when labeled data is scarce or expensive to obtain.";
} else if (message.toLowerCase().includes("what are neural networks") || message.toLowerCase().includes("explain artificial neural networks")) {
    botResponse = "Neural networks are a series of algorithms modeled after the human brain, designed to recognize patterns. They are the backbone of deep learning.";
} else if (message.toLowerCase().includes("what is an algorithm") || message.toLowerCase().includes("define algorithm")) {
    botResponse = "An algorithm in AI is a set of rules or instructions that a computer follows to solve a problem or perform a task.";
} else if (message.toLowerCase().includes("what is big data") || message.toLowerCase().includes("ai and big data")) {
    botResponse = "Big data refers to extremely large datasets that may be analyzed computationally to reveal patterns, trends, and associations, especially relating to human behavior and interactions. AI often relies on big data for training.";

// --- AI Applications and Uses ---
} else if (message.toLowerCase().includes("where is ai used") || message.toLowerCase().includes("applications of ai")) {
    botResponse = "AI is used in various fields including healthcare, finance, transportation, education, entertainment, customer service, and manufacturing.";
} else if (message.toLowerCase().includes("ai in healthcare") || message.toLowerCase().includes("how is ai used in medicine")) {
    botResponse = "In healthcare, AI assists with disease diagnosis, drug discovery, personalized treatment plans, medical imaging analysis, and predictive analytics for patient outcomes.";
} else if (message.toLowerCase().includes("ai in finance") || message.toLowerCase().includes("how is ai used in banking")) {
    botResponse = "In finance, AI is used for fraud detection, algorithmic trading, risk management, credit scoring, personalized financial advice, and chatbots for customer service.";
} else if (message.toLowerCase().includes("ai in transportation") || message.toLowerCase().includes("self-driving cars ai")) {
    botResponse = "In transportation, AI powers self-driving cars, optimizes traffic flow, manages logistics in supply chains, and enhances navigation systems.";
} else if (message.toLowerCase().includes("ai in education") || message.toLowerCase().includes("how ai helps learning")) {
    botResponse = "AI in education can personalize learning experiences, automate grading, provide intelligent tutoring systems, and help create adaptive learning content.";
} else if (message.toLowerCase().includes("ai in entertainment") || message.toLowerCase().includes("ai in movies and games")) {
    botResponse = "In entertainment, AI is used for personalized content recommendations (Netflix, Spotify), creating realistic game AI, generating special effects, and even composing music.";
} else if (message.toLowerCase().includes("ai in customer service") || message.toLowerCase().includes("chatbots and ai")) {
    botResponse = "In customer service, AI-powered chatbots and virtual assistants handle inquiries, provide support, and personalize interactions, improving efficiency and availability.";
} else if (message.toLowerCase().includes("ai in manufacturing") || message.toLowerCase().includes("ai in factories")) {
    botResponse = "In manufacturing, AI optimizes production processes, performs quality control, predictive maintenance of machinery, and enhances supply chain management.";
} else if (message.toLowerCase().includes("ai in agriculture") || message.toLowerCase().includes("ai farming")) {
    botResponse = "In agriculture, AI assists with crop monitoring, precision farming, livestock management, disease detection in plants, and optimizing irrigation.";
} else if (message.toLowerCase().includes("ai in cybersecurity") || message.toLowerCase().includes("ai for security")) {
    botResponse = "In cybersecurity, AI helps detect and prevent cyber threats, identify anomalies in network traffic, analyze malware, and automate security operations.";

// --- AI Challenges and Limitations ---
} else if (message.toLowerCase().includes("challenges of ai") || message.toLowerCase().includes("limitations of ai")) {
    botResponse = "Challenges in AI include data privacy, bias in algorithms, ethical considerations, job displacement, the need for vast amounts of data, and the 'black box' problem of explainability.";
} else if (message.toLowerCase().includes("ai bias") || message.toLowerCase().includes("algorithmic bias")) {
    botResponse = "AI bias occurs when an algorithm produces prejudiced results due to biased data used for training, or flawed assumptions in its design. This can lead to unfair or discriminatory outcomes.";
} else if (message.toLowerCase().includes("ethical concerns ai") || message.toLowerCase().includes("ai ethics")) {
    botResponse = "Ethical concerns in AI include algorithmic bias, privacy invasion, accountability for AI decisions, autonomous weapons, and the potential for job displacement.";
} else if (message.toLowerCase().includes("ai job displacement") || message.toLowerCase().includes("will ai take our jobs")) {
    botResponse = "AI is likely to automate some tasks, potentially leading to job displacement in certain sectors, but it's also expected to create new jobs and transform existing ones, requiring new skills.";
} else if (message.toLowerCase().includes("black box problem ai") || message.toLowerCase().includes("explainable ai")) {
    botResponse = "The 'black box' problem refers to the difficulty in understanding how certain AI models, especially deep learning networks, arrive at their decisions. Explainable AI (XAI) aims to address this by making AI more transparent.";
} else if (message.toLowerCase().includes("data privacy ai") || message.toLowerCase().includes("ai and privacy")) {
    botResponse = "Data privacy in AI is a concern because AI systems often require access to large amounts of personal data, raising questions about how this data is collected, stored, and used securely and ethically.";
} else if (message.toLowerCase().includes("hallucinations in ai") || message.toLowerCase().includes("ai making things up")) {
    botResponse = "AI 'hallucinations' occur when a generative AI model produces outputs that are plausible but factually incorrect or nonsensical, often due to limitations in its training data or generation process.";
} else if (message.toLowerCase().includes("common sense ai") || message.toLowerCase().includes("does ai have common sense")) {
    botResponse = "Current AI systems largely lack true common sense reasoning, which is the ability to make intuitive inferences about the world based on everyday knowledge, a key area of ongoing research.";
} else if (message.toLowerCase().includes("ai creativity") || message.toLowerCase().includes("can ai be creative")) {
    botResponse = "While AI can generate creative outputs like art, music, and text, its 'creativity' is based on patterns learned from existing data, rather than genuine original thought or intent in the human sense.";
} else if (message.toLowerCase().includes("ai understanding") || message.toLowerCase().includes("does ai truly understand")) {
    botResponse = "Current AI models do not 'understand' in the human sense of consciousness or subjective experience. They process information and generate responses based on statistical relationships and patterns.";

// --- AI Development and Future ---
} else if (message.toLowerCase().includes("how is ai developed") || message.toLowerCase().includes("ai development process")) {
    botResponse = "AI development typically involves defining the problem, gathering and preparing data, choosing and training a model, evaluating its performance, and deploying and maintaining the system.";
} else if (message.toLowerCase().includes("who invented ai") || message.toLowerCase().includes("origin of ai")) {
    botResponse = "The concept of AI has ancient roots, but the field of Artificial Intelligence as we know it began in the mid-20th century. John McCarthy coined the term 'Artificial Intelligence' in 1956.";
} else if (message.toLowerCase().includes("future of ai") || message.toLowerCase().includes("what's next for ai")) {
    botResponse = "The future of AI is expected to involve more advanced general AI, increased integration into daily life, improved explainability, and continued ethical discussions.";
} else if (message.toLowerCase().includes("singularity ai") || message.toLowerCase().includes("technological singularity")) {
    botResponse = "The technological singularity is a hypothetical future point where technological growth becomes uncontrollable and irreversible, resulting in unforeseeable changes to human civilization, often associated with advanced AI.";
} else if (message.toLowerCase().includes("ai safety") || message.toLowerCase().includes("how to make ai safe")) {
    botResponse = "AI safety focuses on ensuring that AI systems are developed and deployed in a way that minimizes risks and maximizes benefits to humanity, including addressing issues like control, alignment, and robustness.";
} else if (message.toLowerCase().includes("ai regulation") || message.toLowerCase().includes("governing ai")) {
    botResponse = "AI regulation involves creating laws and policies to guide the development and deployment of AI, aiming to address ethical concerns, promote responsible innovation, and mitigate risks.";
} else if (message.toLowerCase().includes("can ai be conscious") || message.toLowerCase().includes("ai consciousness")) {
    botResponse = "The question of AI consciousness is a philosophical and scientific debate. Currently, there is no evidence that AI systems are conscious, and the definition of consciousness itself is complex.";
} else if (message.toLowerCase().includes("ai and climate change") || message.toLowerCase().includes("ai for environment")) {
    botResponse = "AI can help address climate change by optimizing energy consumption, improving climate modeling, enhancing disaster response, and promoting sustainable agriculture and resource management.";
} else if (message.toLowerCase().includes("quantum computing and ai") || message.toLowerCase().includes("ai with quantum")) {
    botResponse = "Quantum computing has the potential to significantly accelerate certain AI tasks, particularly in complex optimization problems and machine learning algorithms, offering new possibilities for advanced AI.";
} else if (message.toLowerCase().includes("ai and robotics future") || message.toLowerCase().includes("future robots")) {
    botResponse = "The future of AI and robotics will likely see increasingly autonomous and intelligent robots integrated into various aspects of life, from industrial automation to personal assistance.";

// --- AI Concepts and Terminology ---
} else if (message.toLowerCase().includes("what is a dataset") || message.toLowerCase().includes("explain data in ai")) {
    botResponse = "A dataset is a collection of related data that is used to train and test AI models. The quality and quantity of data are crucial for AI performance.";
} else if (message.toLowerCase().includes("what is a model ai") || message.toLowerCase().includes("ai model definition")) {
    botResponse = "In AI, a 'model' is the output of the training process, representing what the AI system has learned from the data. It's the trained algorithm that makes predictions or decisions.";
} else if (message.toLowerCase().includes("what is training data") || message.toLowerCase().includes("define training data")) {
    botResponse = "Training data is the portion of the dataset used to train an AI model. The model learns patterns and relationships from this data.";
} else if (message.toLowerCase().includes("what is testing data") || message.toLowerCase().includes("define testing data")) {
    botResponse = "Testing data is a separate portion of the dataset used to evaluate the performance of a trained AI model, ensuring it can generalize to new, unseen data.";
} else if (message.toLowerCase().includes("what is validation data") || message.toLowerCase().includes("define validation set")) {
    botResponse = "Validation data is used during the model development process to tune hyperparameters and prevent overfitting, separate from the training and testing sets.";
} else if (message.toLowerCase().includes("what is overfitting") || message.toLowerCase().includes("explain overfitting in ml")) {
    botResponse = "Overfitting occurs when an AI model learns the training data too well, including its noise and outliers, leading to poor performance on new, unseen data.";
} else if (message.toLowerCase().includes("what is underfitting") || message.toLowerCase().includes("explain underfitting in ml")) {
    botResponse = "Underfitting occurs when an AI model is too simple to capture the underlying patterns in the training data, leading to poor performance on both training and new data.";
} else if (message.toLowerCase().includes("what is a feature in ml") || message.toLowerCase().includes("explain features for ai")) {
    botResponse = "In machine learning, a 'feature' is an individual measurable property or characteristic of a phenomenon being observed. These are the inputs to the AI model.";
} else if (message.toLowerCase().includes("what is a label in ml") || message.toLowerCase().includes("explain labels for ai")) {
    botResponse = "In supervised machine learning, a 'label' is the output or target variable that the model is trying to predict or classify.";
} else if (message.toLowerCase().includes("what is regression in ml") || message.toLowerCase().includes("explain regression model")) {
    botResponse = "Regression is a supervised learning task where the model predicts a continuous output value, such as predicting house prices or temperature.";
} else if (message.toLowerCase().includes("what is classification in ml") || message.toLowerCase().includes("explain classification model")) {
    botResponse = "Classification is a supervised learning task where the model predicts a categorical output, such as classifying an email as spam or not spam, or an image as a cat or dog.";
} else if (message.toLowerCase().includes("what is clustering in ml") || message.toLowerCase().includes("explain clustering in ai")) {
    botResponse = "Clustering is an unsupervised learning task that involves grouping data points into clusters based on their similarities, without predefined categories.";
} else if (message.toLowerCase().includes("what is a hyperparameter") || message.toLowerCase().includes("explain hyperparameters in ml")) {
    botResponse = "Hyperparameters are configuration variables external to the model that are set before the learning process begins, influencing how the model learns. Examples include learning rate or number of layers.";
} else if (message.toLowerCase().includes("what is an activation function") || message.toLowerCase().includes("explain activation functions")) {
    botResponse = "An activation function in neural networks determines whether a neuron should be activated or not, based on the weighted sum of its inputs, introducing non-linearity to the model.";
} else if (message.toLowerCase().includes("what is backpropagation") || message.toLowerCase().includes("explain backpropagation in neural networks")) {
    botResponse = "Backpropagation is a key algorithm used to train neural networks. It calculates the gradient of the loss function with respect to the weights and biases, allowing the model to adjust its parameters to reduce error.";
} else if (message.toLowerCase().includes("what is gradient descent") || message.toLowerCase().includes("explain gradient descent")) {
    botResponse = "Gradient descent is an optimization algorithm used to minimize the cost function of an AI model by iteratively moving in the direction of the steepest descent of the function.";
} else if (message.toLowerCase().includes("what is an api") || message.toLowerCase().includes("explain api for ai")) {
    botResponse = "An API (Application Programming Interface) for AI allows different software systems to communicate and interact with AI models or services, enabling developers to integrate AI capabilities into their applications.";
} else if (message.toLowerCase().includes("what is tensorflow") || message.toLowerCase().includes("what is pytorch")) {
    botResponse = "TensorFlow and PyTorch are popular open-source machine learning frameworks used by developers and researchers to build and train AI models, especially deep learning networks.";
} else if (message.toLowerCase().includes("what is gpt") || message.toLowerCase().includes("explain gpt models")) {
    botResponse = "GPT (Generative Pre-trained Transformer) refers to a series of large language models developed by OpenAI. They are pre-trained on vast amounts of text data and are capable of generating human-like text.";
} else if (message.toLowerCase().includes("what is adversarial ai") || message.toLowerCase().includes("explain adversarial attacks")) {
    botResponse = "Adversarial AI involves techniques where subtle, often imperceptible, perturbations are added to input data to intentionally mislead or trick AI models, highlighting vulnerabilities in AI systems.";
} else if (message.toLowerCase().includes("what is transfer learning") || message.toLowerCase().includes("explain transfer learning in ml")) {
    botResponse = "Transfer learning is a machine learning technique where a model trained on one task is re-used as the starting point for a model on a second, related task, saving training time and data.";
} else if (message.toLowerCase().includes("what is generative ai") || message.toLowerCase().includes("explain generative models")) {
    botResponse = "Generative AI refers to AI models capable of generating new content, such as images, text, audio, or video, that resembles the data they were trained on.";

// --- AI Benefits and Risks ---
} else if (message.toLowerCase().includes("benefits of ai") || message.toLowerCase().includes("advantages of ai")) {
    botResponse = "Benefits of AI include increased efficiency, automation of repetitive tasks, enhanced decision-making, personalized experiences, innovation in various industries, and solutions to complex problems.";
} else if (message.toLowerCase().includes("risks of ai") || message.toLowerCase().includes("dangers of ai")) {
    botResponse = "Risks of AI include job displacement, ethical concerns (bias, privacy), potential misuse (autonomous weapons), over-reliance on AI, and the challenge of controlling highly intelligent systems.";
} else if (message.toLowerCase().includes("ai in daily life") || message.toLowerCase().includes("how ai affects us")) {
    botResponse = "AI affects daily life through voice assistants, personalized recommendations, spam filters, facial recognition, navigation apps, smart home devices, and much more.";
} else if (message.toLowerCase().includes("ai for good") || message.toLowerCase().includes("positive impact of ai")) {
    botResponse = "AI can be used for good to address global challenges like climate change, disease, poverty, and hunger, by providing powerful tools for research, optimization, and resource allocation.";
} else if (message.toLowerCase().includes("ai and human interaction") || message.toLowerCase().includes("ai relationship with humans")) {
    botResponse = "AI's relationship with humans is evolving. It aims to augment human capabilities, automate mundane tasks, and provide new ways for humans to interact with technology and each other.";
} else if (message.toLowerCase().includes("ai and creativity") || message.toLowerCase().includes("ai making art")) {
    botResponse = "AI can create art, music, and stories by learning from vast datasets of existing creative works. While impressive, the debate continues on whether this constitutes true creativity or sophisticated imitation.";

// --- AI Specialties and Subfields ---
} else if (message.toLowerCase().includes("what is expert systems") || message.toLowerCase().includes("explain expert systems")) {
    botResponse = "Expert systems are an older branch of AI that mimics the decision-making ability of a human expert in a specific domain, typically using rule-based reasoning.";
} else if (message.toLowerCase().includes("what is fuzzy logic") || message.toLowerCase().includes("explain fuzzy logic in ai")) {
    botResponse = "Fuzzy logic is a form of logic that allows for reasoning with approximate or imprecise information, unlike traditional binary (true/false) logic, often used in control systems.";
} else if (message.toLowerCase().includes("what are genetic algorithms") || message.toLowerCase().includes("explain genetic algorithms")) {
    botResponse = "Genetic algorithms are optimization algorithms inspired by the process of natural selection and genetics, used to find optimal or near-optimal solutions to complex problems.";
} else if (message.toLowerCase().includes("what is swarm intelligence") || message.toLowerCase().includes("explain swarm intelligence")) {
    botResponse = "Swarm intelligence is an AI approach inspired by the collective behavior of decentralized, self-organized systems in nature, such as ant colonies or bird flocks, used for optimization.";
} else if (message.toLowerCase().includes("what is robotics process automation") || message.toLowerCase().includes("explain rpa")) {
    botResponse = "Robotic Process Automation (RPA) uses software robots to automate repetitive, rule-based tasks traditionally performed by humans, often in business processes, but it's distinct from true AI.";
} else if (message.toLowerCase().includes("what is cognitive computing") || message.toLowerCase().includes("explain cognitive ai")) {
    botResponse = "Cognitive computing aims to simulate human thought processes, such as reasoning, learning, and understanding, to interact with humans more naturally and solve complex problems.";
} else if (message.toLowerCase().includes("what is sentiment analysis") || message.toLowerCase().includes("explain sentiment detection")) {
    botResponse = "Sentiment analysis (or opinion mining) is an NLP technique used to determine the emotional tone or sentiment expressed in a piece of text, categorizing it as positive, negative, or neutral.";
} else if (message.toLowerCase().includes("what is speech recognition") || message.toLowerCase().includes("explain voice ai")) {
    botResponse = "Speech recognition is an AI technology that enables computers to convert spoken language into text, forming the basis for voice assistants and dictation software.";
} else if (message.toLowerCase().includes("what is image recognition") || message.toLowerCase().includes("explain image ai")) {
    botResponse = "Image recognition is a computer vision task that involves identifying and classifying objects, people, text, and other entities within images or videos.";
} else if (message.toLowerCase().includes("what is predictive analytics") || message.toLowerCase().includes("explain predictive ai")) {
    botResponse = "Predictive analytics uses historical data and AI/ML techniques to make predictions about future outcomes or trends, helping businesses make informed decisions.";

// --- AI Tools and Technologies ---
} else if (message.toLowerCase().includes("popular ai languages") || message.toLowerCase().includes("best language for ai")) {
    botResponse = "Popular programming languages for AI include Python, R, Java, C++, and Julia, with Python being the most widely used due to its extensive libraries and frameworks.";
} else if (message.toLowerCase().includes("ai libraries") || message.toLowerCase().includes("ml libraries")) {
    botResponse = "Key AI and ML libraries include TensorFlow, PyTorch, Keras, scikit-learn, NumPy, Pandas, and Matplotlib.";
} else if (message.toLowerCase().includes("ai hardware") || message.toLowerCase().includes("gpu for ai")) {
    botResponse = "AI hardware often involves GPUs (Graphics Processing Units) for their parallel processing capabilities, as well as specialized AI chips like TPUs (Tensor Processing Units) for faster computations.";
} else if (message.toLowerCase().includes("cloud ai platforms") || message.toLowerCase().includes("ai as a service")) {
    botResponse = "Cloud AI platforms like Google Cloud AI Platform, AWS SageMaker, and Azure Machine Learning provide tools and services for building, training, and deploying AI models.";
} else if (message.toLowerCase().includes("open source ai") || message.toLowerCase().includes("free ai tools")) {
    botResponse = "Many AI tools and frameworks are open-source, including TensorFlow, PyTorch, scikit-learn, and Hugging Face Transformers, making AI development more accessible.";

// --- Learning and Careers in AI ---
} else if (message.toLowerCase().includes("how to learn ai") || message.toLowerCase().includes("start learning ai")) {
    botResponse = "To learn AI, start with foundational math (linear algebra, calculus, probability), programming (Python is key), and then explore online courses, tutorials, and projects in ML and deep learning.";
} else if (message.toLowerCase().includes("ai careers") || message.toLowerCase().includes("jobs in ai")) {
    botResponse = "AI careers include AI engineer, machine learning engineer, data scientist, research scientist, NLP engineer, computer vision engineer, robotics engineer, and AI product manager.";
} else if (message.toLowerCase().includes("skills for ai") || message.toLowerCase().includes("what skills do i need for ai")) {
    botResponse = "Key skills for AI include programming (Python), mathematics (statistics, linear algebra, calculus), data analysis, machine learning algorithms, problem-solving, and domain knowledge.";
} else if (message.toLowerCase().includes("ai certifications") || message.toLowerCase().includes("best ai courses")) {
    botResponse = "Many platforms offer AI certifications and courses, such as Coursera (DeepLearning.AI, Stanford), edX, Udacity, and university programs. Choose based on your learning style and goals.";

// --- Miscellaneous AI Questions ---
} else if (message.toLowerCase().includes("ai vs human intelligence") || message.toLowerCase().includes("ai vs brain")) {
    botResponse = "AI is designed to perform specific cognitive tasks, often surpassing human speed and scale, but lacks human-like consciousness, emotional intelligence, and common sense reasoning.";
} else if (message.toLowerCase().includes("is ai truly intelligent") || message.toLowerCase().includes("can ai think")) {
    botResponse = "Whether AI is 'truly intelligent' or can 'think' depends on the definition of intelligence and thinking. Current AI excels at computation and pattern recognition but doesn't possess consciousness or subjective experience like humans.";
} else if (message.toLowerCase().includes("what is the turing test") || message.toLowerCase().includes("explain turing test")) {
    botResponse = "The Turing Test, proposed by Alan Turing, is a test of a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human. If an interrogator cannot reliably distinguish the machine from a human, the machine is said to have passed.";
} else if (message.toLowerCase().includes("ai and big data") || message.toLowerCase().includes("relationship between ai and big data")) {
    botResponse = "Big data is the fuel for AI. AI models, especially deep learning, require massive amounts of data to learn patterns and make accurate predictions. Big data provides the raw material, and AI provides the tools to extract insights.";
} else if (message.toLowerCase().includes("ai in space exploration") || message.toLowerCase().includes("nasa ai")) {
    botResponse = "AI is used in space exploration for autonomous navigation of spacecraft, analyzing vast amounts of planetary data, optimizing mission control, and assisting in the search for extraterrestrial life.";
} else if (message.toLowerCase().includes("ai and art") || message.toLowerCase().includes("ai generating art")) {
    botResponse = "AI can generate unique and diverse artworks, from paintings and sculptures to music and poetry, by learning styles and patterns from existing creative works and then generating new compositions.";
} else if (message.toLowerCase().includes("ai in gaming") || message.toLowerCase().includes("ai for video games")) {
    botResponse = "In gaming, AI creates intelligent non-player characters (NPCs), optimizes game environments, generates content, and adapts game difficulty based on player performance.";
} else if (message.toLowerCase().includes("ai and law") || message.toLowerCase().includes("ai in legal field")) {
    botResponse = "AI in law can assist with legal research, document review, predicting case outcomes, and providing insights for legal strategies, but it's not replacing human lawyers.";
} else if (message.toLowerCase().includes("ai in journalism") || message.toLowerCase().includes("ai for news")) {
    botResponse = "AI in journalism can automate repetitive tasks like writing financial reports or sports summaries, assist with data analysis for investigative journalism, and personalize news feeds.";
} else if (message.toLowerCase().includes("ai in sports") || message.toLowerCase().includes("ai for athletes")) {
    botResponse = "In sports, AI analyzes player performance, predicts game outcomes, assists with training regimens, enhances fan engagement, and helps with tactical decision-making.";
} else if (message.toLowerCase().includes("ai in retail") || message.toLowerCase().includes("ai for shopping")) {
    botResponse = "AI in retail provides personalized shopping experiences, optimizes inventory management, predicts consumer trends, enhances supply chain efficiency, and powers recommendation engines.";
} else if (message.toLowerCase().includes("ai in real estate") || message.toLowerCase().includes("ai for property")) {
    botResponse = "AI in real estate helps with property valuation, predicts market trends, identifies investment opportunities, and personalizes property recommendations for buyers.";
} else if (message.toLowerCase().includes("ai in food industry") || message.toLowerCase().includes("ai for restaurants")) {
    botResponse = "AI in the food industry can optimize supply chains, ensure food safety, assist with recipe development, personalize dietary recommendations, and automate cooking processes.";
} else if (message.toLowerCase().includes("ai in music") || message.toLowerCase().includes("ai composing music")) {
    botResponse = "AI can compose music in various styles, generate melodies, harmonies, and rhythms, and even create entire musical pieces, learning from vast datasets of existing music.";
} else if (message.toLowerCase().includes("ai in weather forecasting") || message.toLowerCase().includes("ai for weather")) {
    botResponse = "AI enhances weather forecasting by analyzing complex atmospheric data, identifying patterns, and improving the accuracy of predictions, especially for extreme weather events.";
} else if (message.toLowerCase().includes("ai in urban planning") || message.toLowerCase().includes("ai for smart cities")) {
    botResponse = "AI in urban planning contributes to smart city initiatives by optimizing traffic flow, managing public services, analyzing urban data for better resource allocation, and improving infrastructure.";
} else if (message.toLowerCase().includes("ai and ethics committees") || message.toLowerCase().includes("ethical review for ai")) {
    botResponse = "Ethical review for AI often involves multidisciplinary committees that assess the potential societal impacts, biases, and fairness of AI systems before deployment.";
} else if (message.toLowerCase().includes("ai and intellectual property") || message.toLowerCase().includes("ai copyright")) {
    botResponse = "The intersection of AI and intellectual property is a growing legal area, addressing questions of ownership, copyright, and patentability for AI-generated content and inventions.";
} else if (message.toLowerCase().includes("ai and emotional intelligence") || message.toLowerCase().includes("can ai have emotions")) {
    botResponse = "Current AI systems do not possess emotional intelligence or true emotions. They can be programmed to recognize and respond to human emotions based on patterns, but they don't experience them themselves.";
} else if (message.toLowerCase().includes("ai and creativity in humans") || message.toLowerCase().includes("how ai enhances human creativity")) {
    botResponse = "AI can enhance human creativity by automating mundane tasks, providing new tools for content generation, assisting with brainstorming, and offering fresh perspectives or inspirations.";
} else if (message.toLowerCase().includes("ai and bias mitigation") || message.toLowerCase().includes("reducing ai bias")) {
    botResponse = "Reducing AI bias involves techniques like using diverse and representative training data, implementing fairness metrics, developing interpretable models, and conducting regular audits of AI systems.";
} else if (message.toLowerCase().includes("ai and sustainability") || message.toLowerCase().includes("ai for green tech")) {
    botResponse = "AI can contribute to sustainability by optimizing energy grids, designing more efficient materials, monitoring environmental changes, and improving waste management and recycling processes.";
} else if (message.toLowerCase().includes("ai and misinformation") || message.toLowerCase().includes("ai for fake news detection")) {
    botResponse = "AI can be used to detect and combat misinformation by analyzing text and media for patterns associated with fake news, although it can also be used to generate it, creating an ongoing challenge.";
} else if (message.toLowerCase().includes("ai and explainability") || message.toLowerCase().includes("why is explainable ai important")) {
    botResponse = "Explainable AI (XAI) is important because it allows humans to understand, trust, and effectively manage AI systems, especially in critical applications where decisions need to be justified.";
} else if (message.toLowerCase().includes("ai and decision making") || message.toLowerCase().includes("ai's role in decisions")) {
    botResponse = "AI's role in decision-making is to provide data-driven insights, predictions, and recommendations, augmenting human decision-makers rather than fully replacing them in complex or ethical scenarios.";
} else if (message.toLowerCase().includes("ai in manufacturing and automation") || message.toLowerCase().includes("ai for factory automation")) {
    botResponse = "AI in manufacturing drives automation through intelligent robots, optimizes production lines, predicts equipment failures, and enhances quality control processes.";
} else if (message.toLowerCase().includes("ai in education personalization") || message.toLowerCase().includes("ai for tailored learning")) {
    botResponse = "AI in education facilitates personalized learning paths by adapting content, pace, and teaching methods to individual student needs and learning styles.";
} else if (message.toLowerCase().includes("ai and privacy preserving techniques") || message.toLowerCase().includes("ai privacy solutions")) {
    botResponse = "AI privacy-preserving techniques include federated learning, differential privacy, and homomorphic encryption, which allow AI models to be trained and used while protecting sensitive data.";
} else if (message.toLowerCase().includes("ai and the metaverse") || message.toLowerCase().includes("ai in virtual worlds")) {
    botResponse = "AI will play a crucial role in the metaverse by powering intelligent avatars, creating dynamic virtual environments, facilitating natural language interactions, and personalizing user experiences.";
} else if (message.toLowerCase().includes("ai for scientific discovery") || message.toLowerCase().includes("ai in research")) {
    botResponse = "AI accelerates scientific discovery by analyzing vast scientific datasets, simulating complex phenomena, identifying new materials, and assisting in drug design and personalized medicine.";
} else if (message.toLowerCase().includes("ai and human-robot interaction") || message.toLowerCase().includes("hri ai")) {
    botResponse = "Human-Robot Interaction (HRI) is a field that studies how humans and robots interact, focusing on creating intuitive, safe, and effective communication and collaboration between them, often powered by AI.";
} else if (message.toLowerCase().includes("ai in smart homes") || message.toLowerCase().includes("ai for home automation")) {
    botResponse = "AI in smart homes enables devices to learn user preferences, automate tasks like lighting and temperature control, enhance security, and provide personalized comfort and convenience.";
} else if (message.toLowerCase().includes("ai for accessibility") || message.toLowerCase().includes("ai helping disabled")) {
    botResponse = "AI can enhance accessibility through technologies like speech-to-text, text-to-speech, image recognition for the visually impaired, and assistive robotics for people with mobility challenges.";
} else if (message.toLowerCase().includes("ai and gaming development") || message.toLowerCase().includes("ai in game creation")) {
    botResponse = "AI assists in game development by generating realistic game worlds, creating dynamic narratives, optimizing game assets, and even designing entire game levels.";
} else if (message.toLowerCase().includes("ai in fashion industry") || message.toLowerCase().includes("ai for fashion")) {
    botResponse = "AI in the fashion industry helps with trend forecasting, personalized recommendations, supply chain optimization, sustainable production practices, and virtual try-on experiences.";
} else if (message.toLowerCase().includes("ai and augmented reality") || message.toLowerCase().includes("ai for ar")) {
    botResponse = "AI enhances Augmented Reality (AR) by improving object recognition, tracking, and understanding of the physical environment, leading to more realistic and interactive AR experiences.";
} else if (message.toLowerCase().includes("ai and virtual reality") || message.toLowerCase().includes("ai for vr")) {
    botResponse = "AI in Virtual Reality (VR) powers intelligent virtual characters, enhances realistic simulations, adapts environments based on user interaction, and creates more immersive and engaging VR experiences.";
} else if (message.toLowerCase().includes("ai and digital marketing") || message.toLowerCase().includes("ai for marketing")) {
    botResponse = "AI in digital marketing optimizes ad targeting, personalizes content delivery, analyzes customer behavior, automates marketing campaigns, and improves lead generation.";
} else if (message.toLowerCase().includes("ai and cybersecurity threats") || message.toLowerCase().includes("ai for cyber warfare")) {
    botResponse = "While AI can defend against cyber threats, it can also be used by malicious actors for more sophisticated attacks, creating an arms race in cybersecurity.";
} else if (message.toLowerCase().includes("ai and intellectual curiosity") || message.toLowerCase().includes("can ai be curious")) {
    botResponse = "Current AI models do not possess intellectual curiosity in the human sense. They operate based on programmed objectives and data patterns, rather than an intrinsic desire to explore or learn for its own sake.";
} else if (message.toLowerCase().includes("ai for drug discovery") || message.toLowerCase().includes("ai in pharmaceuticals")) {
    botResponse = "AI accelerates drug discovery by analyzing vast molecular datasets, predicting drug-target interactions, designing new compounds, and optimizing clinical trial processes.";
} else if (message.toLowerCase().includes("ai and emotional support") || message.toLowerCase().includes("ai for mental health")) {
    botResponse = "AI can provide some forms of emotional support through chatbots offering therapy exercises or mindfulness prompts, but it's not a substitute for human mental health professionals.";
} else if (message.toLowerCase().includes("ai and predictive maintenance") || message.toLowerCase().includes("ai for equipment upkeep")) {
    botResponse = "AI in predictive maintenance uses sensor data and machine learning to predict when equipment failures are likely to occur, allowing for proactive maintenance and reducing downtime.";
} else if (message.toLowerCase().includes("ai and personalized medicine") || message.toLowerCase().includes("ai for tailored treatment")) {
    botResponse = "AI in personalized medicine analyzes an individual's genetic makeup, lifestyle, and medical history to recommend highly tailored prevention and treatment strategies.";
} else if (message.toLowerCase().includes("ai and smart grids") || message.toLowerCase().includes("ai for energy management")) {
    botResponse = "AI optimizes smart grids by predicting energy demand, managing renewable energy sources, detecting anomalies, and improving overall energy distribution efficiency.";
} else if (message.toLowerCase().includes("ai and fraud detection") || message.toLowerCase().includes("ai to catch fraud")) {
    botResponse = "AI excels at fraud detection by analyzing vast amounts of transaction data, identifying unusual patterns, and flagging suspicious activities that indicate fraudulent behavior.";
} else if (message.toLowerCase().includes("ai and supply chain optimization") || message.toLowerCase().includes("ai for logistics")) {
    botResponse = "AI optimizes supply chains by predicting demand fluctuations, optimizing inventory levels, improving logistics routes, and enhancing overall operational efficiency from production to delivery.";
} else if (message.toLowerCase().includes("ai and natural disaster prediction") || message.toLowerCase().includes("ai for disaster warning")) {
    botResponse = "AI can aid in natural disaster prediction and response by analyzing seismic data, weather patterns, and satellite imagery to forecast events and optimize relief efforts.";
} else if (message.toLowerCase().includes("ai and personalized recommendations") || message.toLowerCase().includes("ai for product suggestions")) {
    botResponse = "AI-powered recommendation engines analyze user preferences, past behavior, and similar user data to suggest products, content, or services, significantly improving user experience.";
} else if (message.toLowerCase().includes("ai and quantum machine learning") || message.toLowerCase().includes("qml")) {
    botResponse = "Quantum Machine Learning (QML) explores how quantum computing can enhance machine learning algorithms, potentially solving problems currently intractable for classical computers.";
} else if (message.toLowerCase().includes("ai and swarm robotics") || message.toLowerCase().includes("robot swarm ai")) {
    botResponse = "Swarm robotics is an approach to coordinating large numbers of relatively simple robots to achieve complex tasks through collective intelligence, often leveraging AI algorithms for behavior control.";
} else if (message.toLowerCase().includes("ai and synthetic data") || message.toLowerCase().includes("what is synthetic data")) {
    botResponse = "Synthetic data is artificially generated data that mimics the statistical properties of real-world data without containing any actual sensitive information, used for training AI models while preserving privacy.";
} else if (message.toLowerCase().includes("ai and federated learning") || message.toLowerCase().includes("explain federated learning")) {
    botResponse = "Federated learning is a decentralized machine learning approach that enables AI models to be trained on multiple local datasets without centralizing the data, enhancing privacy and security.";
} else if (message.toLowerCase().includes("ai and edge computing") || message.toLowerCase().includes("ai at the edge")) {
    botResponse = "Edge AI refers to running AI computations closer to the data source (on 'edge' devices) rather than in a centralized cloud, reducing latency and bandwidth usage, especially in IoT applications.";
} else if (message.toLowerCase().includes("ai and digital twins") || message.toLowerCase().includes("ai for digital twins")) {
    botResponse = "AI enhances digital twins by providing intelligence to the virtual models, allowing for real-time analysis, predictive simulations, and optimized control of physical assets.";
} else if (message.toLowerCase().includes("ai and responsible innovation") || message.toLowerCase().includes("responsible ai development")) {
    botResponse = "Responsible AI innovation involves developing AI systems with ethical considerations, fairness, transparency, and accountability as core principles, aiming for positive societal impact.";
} else if (message.toLowerCase().includes("ai and explainable algorithms") || message.toLowerCase().includes("interpretable ai")) {
    botResponse = "Explainable algorithms are designed to provide insights into their decision-making processes, allowing humans to understand why a particular output was generated, addressing the 'black box' problem.";
} else if (message.toLowerCase().includes("ai and human-in-the-loop") || message.toLowerCase().includes("human oversight in ai")) {
    botResponse = "Human-in-the-loop (HITL) AI is a model that requires human intervention and judgment at certain points, combining human intelligence with machine intelligence to improve accuracy and ethical oversight.";
} else if (message.toLowerCase().includes("ai and computational creativity") || message.toLowerCase().includes("computational creativity")) {
    botResponse = "Computational creativity is a field of AI that aims to enable computers to generate creative content or ideas that would be considered creative if produced by humans.";
} else if (message.toLowerCase().includes("ai and general intelligence") || message.toLowerCase().includes("agi")) {
    botResponse = "Artificial General Intelligence (AGI) refers to hypothetical AI that possesses the ability to understand, learn, and apply intelligence to any intellectual task that a human being can.";
} else if (message.toLowerCase().includes("ai for resource optimization") || message.toLowerCase().includes("ai for efficiency")) {
    botResponse = "AI is widely used for resource optimization across industries, from energy grids to logistics, by analyzing data to find the most efficient ways to allocate and utilize resources.";
} else if (message.toLowerCase().includes("ai and human augmentatio") || message.toLowerCase().includes("augmenting human intelligence with ai")) {
    botResponse = "AI can augment human intelligence by providing tools that extend human capabilities, such as advanced data analysis, rapid information retrieval, and sophisticated problem-solving assistance.";
} else if (message.toLowerCase().includes("ai and collaborative robotics") || message.toLowerCase().includes("cobots")) {
    botResponse = "Collaborative robots (cobots) are designed to work safely alongside humans in shared workspaces, often leveraging AI for tasks like object recognition, safe navigation, and adaptive interaction.";
} else if (message.toLowerCase().includes("ai and personalized health") || message.toLowerCase().includes("ai for individual health")) {
    botResponse = "AI in personalized health uses individual health data, genetics, and lifestyle factors to provide tailored recommendations for diet, exercise, and preventative care.";
} else if (message.toLowerCase().includes("ai and semantic web") || message.toLowerCase().includes("ai for web understanding")) {
    botResponse = "AI plays a role in the semantic web by enabling computers to understand the meaning of information on the internet, leading to more intelligent and context-aware search and data retrieval.";
} else if (message.toLowerCase().includes("ai for urban mobility") || message.toLowerCase().includes("ai for city transport")) {
    botResponse = "AI optimizes urban mobility by managing traffic lights, predicting congestion, enhancing ride-sharing efficiency, and supporting autonomous public transportation systems.";
} else if (message.toLowerCase().includes("ai and remote sensing") || message.toLowerCase().includes("ai for satellite data")) {
    botResponse = "AI in remote sensing analyzes satellite and aerial imagery for applications in environmental monitoring, urban planning, disaster assessment, and agricultural management.";
} else if (message.toLowerCase().includes("ai and predictive crime analysis") || message.toLowerCase().includes("ai for policing")) {
    botResponse = "AI in policing uses predictive analytics to identify crime hotspots or predict potential criminal activity, though its use raises significant ethical concerns regarding bias and privacy.";
} else if (message.toLowerCase().includes("ai and content moderation") || message.toLowerCase().includes("ai for online safety")) {
    botResponse = "AI assists in content moderation by automatically identifying and flagging harmful or inappropriate content on online platforms, though human oversight is still crucial for nuanced cases.";
} else if (message.toLowerCase().includes("ai and smart manufacturing") || message.toLowerCase().includes("industry 4.0 ai")) {
    botResponse = "AI is a cornerstone of smart manufacturing (Industry 4.0), enabling interconnected systems, predictive maintenance, quality control, and optimized production through data-driven insights.";
} else if (message.toLowerCase().includes("ai and brain-computer interfaces") || message.toLowerCase().includes("bci ai")) {
    botResponse = "AI is essential for brain-computer interfaces (BCIs), translating neural signals into commands or actions, enabling communication and control for individuals with severe disabilities and potentially enhancing human capabilities.";
} else if (message.toLowerCase().includes("ai and materials science") || message.toLowerCase().includes("ai for new materials")) {
    botResponse = "AI in materials science accelerates the discovery and design of new materials with desired properties by simulating molecular interactions and predicting material behavior.";
} else if (message.toLowerCase().includes("ai for personalized advertising") || message.toLowerCase().includes("ai in ads")) {
    botResponse = "AI enables highly personalized advertising by analyzing user data, predicting preferences, and delivering targeted ads, leading to more effective marketing campaigns.";
} else if (message.toLowerCase().includes("ai and virtual assistants") || message.toLowerCase().includes("virtual assistants ai")) {
    botResponse = "AI powers virtual assistants like Siri, Alexa, and Google Assistant, enabling them to understand voice commands, answer questions, perform tasks, and learn user preferences.";
} else if (message.toLowerCase().includes("ai and facial recognition") || message.toLowerCase().includes("facial id ai")) {
    botResponse = "Facial recognition AI identifies or verifies individuals by analyzing patterns in their facial features, used in security, authentication, and increasingly in various public and private applications.";
} else if (message.toLowerCase().includes("ai and augmented analytics") || message.toLowerCase().includes("ai for data analysis")) {
    botResponse = "Augmented analytics uses AI and machine learning to automate data preparation, insight generation, and explanation, making data analysis more accessible and efficient for business users.";
} else if (message.toLowerCase().includes("ai and predictive policing") || message.toLowerCase().includes("ai in law enforcement")) {
    botResponse = "Predictive policing uses AI to analyze historical crime data to forecast where and when crimes are likely to occur, allowing law enforcement to deploy resources more efficiently.";
} else if (message.toLowerCase().includes("ai and supply chain resilience") || message.toLowerCase().includes("ai for robust supply chain")) {
    botResponse = "AI enhances supply chain resilience by identifying potential disruptions, optimizing alternative routes, and predicting risks, helping businesses adapt to unforeseen challenges.";
} else if (message.toLowerCase().includes("ai and conversational ai") || message.toLowerCase().includes("conversational interfaces")) {
    botResponse = "Conversational AI refers to technologies, like chatbots and voice assistants, that allow humans to interact with computers using natural language, enabling more intuitive communication.";
} else if (message.toLowerCase().includes("ai and emotional computing") || message.toLowerCase().includes("affective computing")) {
    botResponse = "Affective computing is a branch of AI that deals with the recognition, interpretation, processing, and simulation of human affects or emotions, aiming to enable computers to understand and respond to human emotional states.";
} else if (message.toLowerCase().includes("what is the capital of france") || message.toLowerCase().includes("france capital city")) {
    botResponse = "The capital of France is Paris.";
} else if (message.toLowerCase().includes("what is the largest ocean") || message.toLowerCase().includes("biggest ocean on earth")) {
    botResponse = "The largest ocean on Earth is the Pacific Ocean.";
} else if (message.toLowerCase().includes("who wrote romeo and juliet") || message.toLowerCase().includes("romeo juliet author")) {
    botResponse = "William Shakespeare wrote Romeo and Juliet.";
} else if (message.toLowerCase().includes("how many planets in solar system") || message.toLowerCase().includes("number of planets")) {
    botResponse = "There are 8 planets in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.";
} else if (message.toLowerCase().includes("what is the highest mountain") || message.toLowerCase().includes("tallest mountain in world")) {
    botResponse = "Mount Everest is the highest mountain in the world.";
} else if (message.toLowerCase().includes("what is the chemical symbol for water") || message.toLowerCase().includes("water chemical formula")) {
    botResponse = "The chemical symbol for water is H2O.";
} else if (message.toLowerCase().includes("what is the fastest land animal") || message.toLowerCase().includes("quickest animal on land")) {
    botResponse = "The fastest land animal is the cheetah.";
} else if (message.toLowerCase().includes("who painted the mona lisa") || message.toLowerCase().includes("mona lisa artist")) {
    botResponse = "Leonardo da Vinci painted the Mona Lisa.";
} else if (message.toLowerCase().includes("what is the longest river in the world") || message.toLowerCase().includes("longest river on earth")) {
    botResponse = "The longest river in the world is generally considered to be the Nile River, though some sources state the Amazon River.";
} else if (message.toLowerCase().includes("what is the currency of japan") || message.toLowerCase().includes("japan money")) {
    botResponse = "The currency of Japan is the Japanese Yen.";
} else if (message.toLowerCase().includes("what is the hardest natural substance") || message.toLowerCase().includes("hardest mineral")) {
    botResponse = "The hardest natural substance known is diamond.";
} else if (message.toLowerCase().includes("what is the capital of canada") || message.toLowerCase().includes("canada capital city")) {
    botResponse = "The capital of Canada is Ottawa.";
} else if (message.toLowerCase().includes("what is the primary gas in earth's atmosphere") || message.toLowerCase().includes("most abundant gas in atmosphere")) {
    botResponse = "The primary gas in Earth's atmosphere is nitrogen, making up about 78%.";
} else if (message.toLowerCase().includes("what is photosynthesis") || message.toLowerCase().includes("explain how plants make food")) {
    botResponse = "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll, carbon dioxide, and water.";
} else if (message.toLowerCase().includes("who discovered gravity") || message.toLowerCase().includes("gravity discoverer")) {
    botResponse = "Isaac Newton is credited with discovering gravity.";

// --- Technology & Internet ---
} else if (message.toLowerCase().includes("what is html") || message.toLowerCase().includes("what does html stand for")) {
    botResponse = "HTML stands for HyperText Markup Language, and it's the standard language for creating web pages.";
} else if (message.toLowerCase().includes("what is css") || message.toLowerCase().includes("what does css stand for")) {
    botResponse = "CSS stands for Cascading Style Sheets, and it's used for describing the presentation of a document written in HTML.";
} else if (message.toLowerCase().includes("what is javascript") || message.toLowerCase().includes("explain js")) {
    botResponse = "JavaScript is a programming language that enables interactive web pages. It's often used for client-side development.";
} else if (message.toLowerCase().includes("what is an operating system") || message.toLowerCase().includes("explain os")) {
    botResponse = "An operating system (OS) is software that manages computer hardware and software resources and provides common services for computer programs.";
} else if (message.toLowerCase().includes("what is a cpu") || message.toLowerCase().includes("what does cpu stand for")) {
    botResponse = "CPU stands for Central Processing Unit, and it's the electronic circuitry that carries out the instructions of a computer program.";
} else if (message.toLowerCase().includes("what is ram") || message.toLowerCase().includes("what does ram stand for")) {
    botResponse = "RAM stands for Random Access Memory, a type of computer memory that can be accessed randomly; it is used to store working data and machine code.";
} else if (message.toLowerCase().includes("what is a url") || message.toLowerCase().includes("what does url stand for")) {
    botResponse = "URL stands for Uniform Resource Locator, and it's the address of a given resource on the World Wide Web.";
} else if (message.toLowerCase().includes("what is a firewall") || message.toLowerCase().includes("explain firewall")) {
    botResponse = "A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.";
} else if (message.toLowerCase().includes("what is ip address") || message.toLowerCase().includes("explain ip address")) {
    botResponse = "An IP (Internet Protocol) address is a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication.";
} else if (message.toLowerCase().includes("what is cloud computing") || message.toLowerCase().includes("explain cloud services")) {
    botResponse = "Cloud computing is the delivery of on-demand computing services—from applications to storage and processing power—typically over the internet and with a pay-as-you-go pricing model.";
} else if (message.toLowerCase().includes("what is vpn") || message.toLowerCase().includes("what does vpn do")) {
    botResponse = "VPN stands for Virtual Private Network. It encrypts your internet connection and hides your IP address, enhancing your online privacy and security.";
} else if (message.toLowerCase().includes("what is a cookie in web") || message.toLowerCase().includes("web browser cookies")) {
    botResponse = "A cookie is a small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is Browse.";
} else if (message.toLowerCase().includes("what is phishing") || message.toLowerCase().includes("explain phishing attack")) {
    botResponse = "Phishing is a cybercrime in which a target or targets are contacted by email, telephone, or text message by someone posing as a legitimate institution to lure individuals into providing sensitive data.";
} else if (message.toLowerCase().includes("what is blockchain") || message.toLowerCase().includes("explain blockchain technology")) {
    botResponse = "Blockchain is a distributed ledger technology that maintains a continuously growing list of records, called blocks, which are linked and secured using cryptography.";
} else if (message.toLowerCase().includes("what is cryptocurrency") || message.toLowerCase().includes("explain digital currency")) {
    botResponse = "Cryptocurrency is a digital or virtual currency that is secured by cryptography, making it nearly impossible to counterfeit or double-spend. Bitcoin is a famous example.";

// --- Health & Wellness ---
} else if (message.toLowerCase().includes("how many bones in human body") || message.toLowerCase().includes("number of human bones")) {
    botResponse = "An adult human body has 206 bones.";
} else if (message.toLowerCase().includes("what is balanced diet") || message.toLowerCase().includes("explain healthy eating")) {
    botResponse = "A balanced diet is one that provides all the nutrients your body needs to function correctly, including carbohydrates, proteins, fats, vitamins, minerals, and water.";
} else if (message.toLowerCase().includes("how much water should i drink daily") || message.toLowerCase().includes("recommended daily water intake")) {
    botResponse = "General recommendations suggest about 8 glasses (around 2 liters) of water per day, but it can vary based on activity level, climate, and individual needs.";
} else if (message.toLowerCase().includes("what is bmi") || message.toLowerCase().includes("explain body mass index")) {
    botResponse = "BMI stands for Body Mass Index, a measure used to estimate if a person's weight is healthy in relation to their height.";
} else if (message.toLowerCase().includes("benefits of exercise") || message.toLowerCase().includes("why should i exercise")) {
    botResponse = "Regular exercise offers numerous benefits, including improved cardiovascular health, stronger muscles and bones, better mood, increased energy, and better sleep.";
} else if (message.toLowerCase().includes("what causes common cold") || message.toLowerCase().includes("how do you get a cold")) {
    botResponse = "The common cold is caused by a viral infection of your nose and throat, most commonly by rhinoviruses.";
} else if (message.toLowerCase().includes("how to improve sleep quality") || message.toLowerCase().includes("tips for better sleep")) {
    botResponse = "To improve sleep quality, establish a consistent sleep schedule, create a relaxing bedtime routine, ensure your bedroom is dark and cool, and limit screen time before bed.";
} else if (message.toLowerCase().includes("what is meditation") || message.toLowerCase().includes("explain meditation benefits")) {
    botResponse = "Meditation is a practice where an individual uses a technique, such as mindfulness, to train attention and awareness, and achieve a mentally clear and emotionally calm state. Benefits include stress reduction and improved focus.";
} else if (message.toLowerCase().includes("what is stress management") || message.toLowerCase().includes("how to cope with stress")) {
    botResponse = "Stress management involves a range of techniques and psychotherapies to control a person's level of stress, usually for the purpose of improving everyday functioning. Examples include exercise, mindfulness, and time management.";
} else if (message.toLowerCase().includes("what is mental health") || message.toLowerCase().includes("define mental wellbeing")) {
    botResponse = "Mental health encompasses your emotional, psychological, and social well-being. It affects how you think, feel, and act.";
} else if (message.toLowerCase().includes("what is addiction") || message.toLowerCase().includes("define addiction")) {
    botResponse = "Addiction is a chronic disease characterized by drug seeking and use that is compulsive, or difficult to control, despite harmful consequences.";
} else if (message.toLowerCase().includes("what are vitamins") || message.toLowerCase().includes("explain vitamins")) {
    botResponse = "Vitamins are organic compounds that organisms need in small quantities to function properly and grow.";
} else if (message.toLowerCase().includes("what are proteins") || message.toLowerCase().includes("explain proteins")) {
    botResponse = "Proteins are large, complex molecules that play many critical roles in the body. They do most of the work in cells and are required for the structure, function, and regulation of the body’s tissues and organs.";
} else if (message.toLowerCase().includes("what is cholesterol") || message.toLowerCase().includes("explain cholesterol")) {
    botResponse = "Cholesterol is a waxy, fat-like substance found in your blood that is needed to build healthy cells, but high levels can increase your risk of heart disease.";

// --- Science & Nature ---
} else if (message.toLowerCase().includes("what is photosynthesis") || message.toLowerCase().includes("how plants make food")) {
    botResponse = "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll, carbon dioxide, and water.";
} else if (message.toLowerCase().includes("what is global warming") || message.toLowerCase().includes("explain climate change")) {
    botResponse = "Global warming is the long-term heating of Earth's climate system observed since the pre-industrial period (between 1850 and 1900) due to human activities, primarily fossil fuel burning, which increases heat-trapping greenhouse gas levels in Earth's atmosphere.";
} else if (message.toLowerCase().includes("what is a black hole") || message.toLowerCase().includes("explain black holes")) {
    botResponse = "A black hole is a region of spacetime where gravity is so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it.";
} else if (message.toLowerCase().includes("what is dna") || message.toLowerCase().includes("what does dna stand for")) {
    botResponse = "DNA stands for Deoxyribonucleic Acid. It's the hereditary material in humans and almost all other organisms, carrying genetic instructions for the development, functioning, growth, and reproduction of all known organisms and many viruses.";
} else if (message.toLowerCase().includes("what is light year") || message.toLowerCase().includes("explain light year")) {
    botResponse = "A light-year is a unit of length used to express astronomical distances and is equivalent to the distance that light travels in one year in vacuum.";
} else if (message.toLowerCase().includes("what is a galaxy") || message.toLowerCase().includes("explain what a galaxy is")) {
    botResponse = "A galaxy is a vast system of stars, stellar remnants, interstellar gas, dust, and dark matter, all bound together by gravity.";
} else if (message.toLowerCase().includes("what causes earthquakes") || message.toLowerCase().includes("how do earthquakes happen")) {
    botResponse = "Earthquakes are usually caused by the sudden release of energy in the Earth's crust that creates seismic waves, typically when tectonic plates rub against each other.";
} else if (message.toLowerCase().includes("what is ozone layer") || message.toLowerCase().includes("explain ozone layer")) {
    botResponse = "The ozone layer is a region of Earth's stratosphere that absorbs most of the Sun's ultraviolet (UV) radiation.";
} else if (message.toLowerCase().includes("what is renewable energy") || message.toLowerCase().includes("explain green energy")) {
    botResponse = "Renewable energy is energy derived from natural processes that are replenished constantly, such as sunlight, geothermal heat, wind, tides, and flowing water.";
} else if (message.toLowerCase().includes("what is a volcano") || message.toLowerCase().includes("explain how volcanoes work")) {
    botResponse = "A volcano is a rupture in the crust of a planetary-mass object, such as Earth, that allows hot lava, volcanic ash, and gases to escape from a magma chamber below the surface.";
} else if (message.toLowerCase().includes("what is the atmosphere") || message.toLowerCase().includes("explain earth's atmosphere")) {
    botResponse = "The Earth's atmosphere is a layer of gases surrounding the planet, held in place by gravity, which protects life on Earth by absorbing ultraviolet solar radiation, warming the surface, and regulating temperature.";
} else if (message.toLowerCase().includes("what is a fossil fuel") || message.toLowerCase().includes("explain fossil fuels")) {
    botResponse = "Fossil fuels are natural fuels such as coal or gas, formed in the geological past from the remains of living organisms.";
} else if (message.toLowerCase().includes("what is gravity") || message.toLowerCase().includes("explain gravity")) {
    botResponse = "Gravity is a fundamental force of nature that attracts any objects with mass or energy. It's what keeps us on Earth and planets orbiting the sun.";
} else if (message.toLowerCase().includes("what is evolution") || message.toLowerCase().includes("explain biological evolution")) {
    botResponse = "Evolution is the process by which populations of organisms change over generations. Genetic variations are passed from parent to offspring, and natural selection favors traits that aid survival and reproduction.";
} else if (message.toLowerCase().includes("what is ecology") || message.toLowerCase().includes("explain ecology")) {
    botResponse = "Ecology is the branch of biology that studies the relationships between living organisms, including humans, and their physical environment; it seeks to understand vital connections between plants and animals and the world around them.";

// --- Everyday Life & General Advice ---
} else if (message.toLowerCase().includes("how to manage time") || message.toLowerCase().includes("time management tips")) {
    botResponse = "Effective time management involves setting priorities, planning your day, avoiding distractions, and taking regular breaks. Tools like calendars and to-do lists can help.";
} else if (message.toLowerCase().includes("how to save money") || message.toLowerCase().includes("money saving tips")) {
    botResponse = "To save money, create a budget, track your spending, cut unnecessary expenses, set savings goals, and automate your savings.";
} else if (message.toLowerCase().includes("how to learn new language") || message.toLowerCase().includes("tips for language learning")) {
    botResponse = "Learning a new language is best done through consistent practice, immersion, using flashcards, speaking with native speakers, and setting realistic goals.";
} else if (message.toLowerCase().includes("how to improve communication skills") || message.toLowerCase().includes("communication tips")) {
    botResponse = "To improve communication, practice active listening, be clear and concise, pay attention to non-verbal cues, and ask open-ended questions.";
} else if (message.toLowerCase().includes("how to deal with stress") || message.toLowerCase().includes("stress reduction techniques")) {
    botResponse = "Managing stress can involve exercise, meditation, deep breathing, spending time in nature, maintaining a healthy diet, and connecting with loved ones.";
} else if (message.toLowerCase().includes("how to set goals effectively") || message.toLowerCase().includes("goal setting tips")) {
    botResponse = "Set SMART goals: Specific, Measurable, Achievable, Relevant, and Time-bound. Break large goals into smaller steps and track your progress.";
} else if (message.toLowerCase().includes("how to build good habits") || message.toLowerCase().includes("habit formation tips")) {
    botResponse = "Building good habits involves making them obvious, attractive, easy, and satisfying. Start small, be consistent, and reward yourself.";
} else if (message.toLowerCase().includes("how to overcome procrastination") || message.toLowerCase().includes("stop procrastinating")) {
    botResponse = "To overcome procrastination, break tasks into smaller steps, set deadlines, use the 'two-minute rule,' and eliminate distractions.";
} else if (message.toLowerCase().includes("how to stay motivated") || message.toLowerCase().includes("tips for motivation")) {
    botResponse = "Stay motivated by setting clear goals, celebrating small wins, finding your 'why,' seeking support, and visualizing your success.";
} else if (message.toLowerCase().includes("how to handle criticism") || message.toLowerCase().includes("dealing with negative feedback")) {
    botResponse = "When handling criticism, listen actively, avoid defensiveness, ask clarifying questions, and use it as an opportunity for growth if valid.";
} else if (message.toLowerCase().includes("how to be a good leader") || message.toLowerCase().includes("leadership qualities")) {
    botResponse = "Good leadership involves clear communication, empathy, integrity, decision-making skills, the ability to motivate others, and leading by example.";
} else if (message.toLowerCase().includes("how to network effectively") || message.toLowerCase().includes("networking tips")) {
    botResponse = "Effective networking involves being genuine, focusing on building relationships, listening more than talking, and following up thoughtfully.";
} else if (message.toLowerCase().includes("how to improve memory") || message.toLowerCase().includes("memory improvement tips")) {
    botResponse = "Improve your memory with techniques like spaced repetition, chunking information, connecting new information to existing knowledge, and getting enough sleep.";
} else if (message.toLowerCase().includes("how to write a good resume") || message.toLowerCase().includes("resume tips")) {
    botResponse = "A good resume is concise, highlights your achievements with quantifiable results, uses strong action verbs, and is tailored to the specific job you're applying for.";
} else if (message.toLowerCase().includes("how to prepare for an interview") || message.toLowerCase().includes("interview preparation tips")) {
    botResponse = "Prepare for an interview by researching the company, practicing common interview questions, preparing questions to ask, and dressing appropriately.";

// --- Culture & History ---
} else if (message.toLowerCase().includes("who was cleopatra") || message.toLowerCase().includes("about cleopatra")) {
    botResponse = "Cleopatra VII Philopator was the last active ruler of the Ptolemaic Kingdom of Egypt, a descendant of its founder Ptolemy I Soter, a Macedonian Greek general and companion of Alexander the Great.";
} else if (message.toLowerCase().includes("what was the roman empire") || message.toLowerCase().includes("explain roman empire")) {
    botResponse = "The Roman Empire was the post-Republican period of ancient Rome, characterized by an autocratic form of government and large territorial holdings around the Mediterranean in Europe, Africa, and Asia.";
} else if (message.toLowerCase().includes("when was world war 2") || message.toLowerCase().includes("dates of ww2")) {
    botResponse = "World War II officially lasted from 1939 to 1945.";
} else if (message.toLowerCase().includes("who was abraham lincoln") || message.toLowerCase().includes("about abraham lincoln")) {
    botResponse = "Abraham Lincoln was the 16th president of the United States, serving from 1861 until his assassination in 1865. He led the country through the Civil War.";
} else if (message.toLowerCase().includes("what is the great wall of china") || message.toLowerCase().includes("explain great wall")) {
    botResponse = "The Great Wall of China is a series of fortifications built across the historical northern borders of ancient Chinese states and Imperial China to protect against various nomadic groups from the Eurasian Steppe.";
} else if (message.toLowerCase().includes("who was albert einstein") || message.toLowerCase().includes("about einstein")) {
    botResponse = "Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics.";
} else if (message.toLowerCase().includes("what is the renaissance") || message.toLowerCase().includes("explain renaissance period")) {
    botResponse = "The Renaissance was a period in European history marking the transition from the Middle Ages to modernity and covering the 15th and 16th centuries. It was characterized by a renewed interest in classical culture.";
} else if (message.toLowerCase().includes("what is the french revolution") || message.toLowerCase().includes("explain french revolution")) {
    botResponse = "The French Revolution was a period of far-reaching social and political upheaval in France and its colonies beginning in 1789 and ending with the rise of Napoleon Bonaparte.";
} else if (message.toLowerCase().includes("who was genghis khan") || message.toLowerCase().includes("about genghis khan")) {
    botResponse = "Genghis Khan was the founder and first Great Khan of the Mongol Empire, which became the largest contiguous empire in history after his death.";
} else if (message.toLowerCase().includes("what was the cold war") || message.toLowerCase().includes("explain cold war")) {
    botResponse = "The Cold War was a period of geopolitical tension between the United States and the Soviet Union and their respective allies, the Western Bloc and the Eastern Bloc, which began after World War II and lasted until 1991.";
} else if (message.toLowerCase().includes("who was nelson mandela") || message.toLowerCase().includes("about nelson mandela")) {
    botResponse = "Nelson Mandela was a South African anti-apartheid revolutionary, political leader, and philanthropist who served as the first president of South Africa from 1994 to 1999.";
} else if (message.toLowerCase().includes("what was the silk road") || message.toLowerCase().includes("explain silk road")) {
    botResponse = "The Silk Road was a network of ancient trade routes that connected the East and West, primarily facilitating trade of goods like silk, spices, and technologies.";
} else if (message.toLowerCase().includes("who was martin Luther king jr") || message.toLowerCase().includes("about mlk")) {
    botResponse = "Martin Luther King Jr. was an American Baptist minister and activist who became the most visible spokesperson and leader in the civil rights movement from 1955 until his assassination in 1968.";
} else if (message.toLowerCase().includes("what is democracy") || message.toLowerCase().includes("explain democracy")) {
    botResponse = "Democracy is a system of government where the citizens exercise power directly or elect representatives from among themselves to form a governing body, such as a parliament.";
} else if (message.toLowerCase().includes("what is capitalism") || message.toLowerCase().includes("explain capitalism")) {
    botResponse = "Capitalism is an economic system based on the private ownership of the means of production and their operation for profit.";

// --- Food & Cooking ---
} else if (message.toLowerCase().includes("how to boil an egg") || message.toLowerCase().includes("boil egg instructions")) {
    botResponse = "To boil an egg, place it in a saucepan, cover with water, bring to a boil, then immediately turn off the heat and let it sit for 3-10 minutes depending on desired doneness. Plunge into cold water to stop cooking.";
} else if (message.toLowerCase().includes("how to make pasta sauce") || message.toLowerCase().includes("simple pasta sauce recipe")) {
    botResponse = "A simple pasta sauce can be made by sautéing garlic and onion, adding crushed tomatoes, herbs like basil and oregano, and simmering for at least 20 minutes.";
} else if (message.toLowerCase().includes("what is sourdough bread") || message.toLowerCase().includes("explain sourdough")) {
    botResponse = "Sourdough bread is made by fermenting dough using naturally occurring yeasts and lactobacilli, creating a distinctive tangy flavor and chewy texture.";
} else if (message.toLowerCase().includes("what are herbs and spices") || message.toLowerCase().includes("difference between herbs and spices")) {
    botResponse = "Herbs are typically leaves from herbaceous plants, while spices are derived from other parts of plants like seeds, bark, roots, or fruits.";
} else if (message.toLowerCase().includes("how to store fresh vegetables") || message.toLowerCase().includes("storing veggies")) {
    botResponse = "Most fresh vegetables should be stored in the crisper drawer of your refrigerator. Leafy greens benefit from being wrapped in a damp paper towel.";
} else if (message.toLowerCase().includes("what is fermentation in food") || message.toLowerCase().includes("explain food fermentation")) {
    botResponse = "Fermentation in food is a metabolic process that produces chemical changes in organic substrates through the action of enzymes, often from microorganisms. It's used to produce foods like yogurt, kimchi, and beer.";
} else if (message.toLowerCase().includes("what is gluten") || message.toLowerCase().includes("explain gluten")) {
    botResponse = "Gluten is a general name for the proteins found in wheat, rye, and barley. It helps food maintain its shape, acting as a glue that holds it together.";
} else if (message.toLowerCase().includes("what is olive oil") || message.toLowerCase().includes("explain olive oil")) {
    botResponse = "Olive oil is a liquid fat obtained from olives, a traditional tree crop of the Mediterranean Basin, produced by pressing whole olives and extracting the oil.";
} else if (message.toLowerCase().includes("what is veganism") || message.toLowerCase().includes("explain vegan diet")) {
    botResponse = "Veganism is a philosophy and way of living that seeks to exclude—as far as is possible and practicable—all forms of exploitation of, and cruelty to, animals for food, clothing, or any other purpose.";
} else if (message.toLowerCase().includes("what is vegetarianism") || message.toLowerCase().includes("explain vegetarian diet")) {
    botResponse = "Vegetarianism is the practice of abstaining from the consumption of meat, including red meat, poultry, seafood, and the flesh of any other animal.";

// --- General & Miscellaneous ---
} else if (message.toLowerCase().includes("what is the internet") || message.toLowerCase().includes("explain internet")) {
    botResponse = "The Internet is a global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to communicate between networks and devices.";
} else if (message.toLowerCase().includes("what is happiness") || message.toLowerCase().includes("define happiness")) {
    botResponse = "Happiness is a mental or emotional state of well-being characterized by positive or pleasant emotions ranging from contentment to intense joy.";
} else if (message.toLowerCase().includes("what is mindfulness") || message.toLowerCase().includes("explain mindfulness")) {
    botResponse = "Mindfulness is a mental state achieved by focusing one's awareness on the present moment, while calmly acknowledging and accepting one's feelings, thoughts, and bodily sensations.";
} else if (message.toLowerCase().includes("how to recycle properly") || message.toLowerCase().includes("recycling tips")) {
    botResponse = "Recycling properly depends on local regulations, but generally involves sorting materials by type (plastics, paper, glass, metal) and ensuring they are clean and dry.";
} else if (message.toLowerCase().includes("how to deal with difficult people") || message.toLowerCase().includes("managing difficult individuals")) {
    botResponse = "When dealing with difficult people, try to stay calm, listen actively, set boundaries, focus on the behavior not the person, and choose your battles wisely.";
} else if (message.toLowerCase().includes("what is empathy") || message.toLowerCase().includes("define empathy")) {
    botResponse = "Empathy is the ability to understand and share the feelings of another.";
} else if (message.toLowerCase().includes("what is critical thinking") || message.toLowerCase().includes("explain critical thinking")) {
    botResponse = "Critical thinking is the objective analysis and evaluation of information in order to form a judgment.";
} else if (message.toLowerCase().includes("what is emotional intelligence") || message.toLowerCase().includes("explain eq")) {
    botResponse = "Emotional intelligence (EQ) is the ability to understand, use, and manage your own emotions in positive ways to relieve stress, communicate effectively, empathize with others, overcome challenges and defuse conflict.";
} else if (message.toLowerCase().includes("what is a metaphor") || message.toLowerCase().includes("explain metaphor")) {
    botResponse = "A metaphor is a figure of speech that directly compares two unlike things without using 'like' or 'as'.";
} else if (message.toLowerCase().includes("what is a simile") || message.toLowerCase().includes("explain simile")) {
    botResponse = "A simile is a figure of speech that directly compares two different things, using the words 'like' or 'as'.";
} else if (message.toLowerCase().includes("what is productivity") || message.toLowerCase().includes("define productivity")) {
    botResponse = "Productivity is the rate at which a person, company, or country produces goods or services, or the amount of work done in a given period of time.";
} else if (message.toLowerCase().includes("how to foster creativity") || message.toLowerCase().includes("tips for creativity")) {
    botResponse = "Foster creativity by engaging in divergent thinking, brainstorming, exposing yourself to new experiences, taking breaks, and embracing mistakes as learning opportunities.";
} else if (message.toLowerCase().includes("what is sustainable living") || message.toLowerCase().includes("explain sustainable lifestyle")) {
    botResponse = "Sustainable living is a lifestyle that attempts to reduce an individual's or society's use of Earth's natural resources and personal resources.";
} else if (message.toLowerCase().includes("what is mindfulness meditation") || message.toLowerCase().includes("mindfulness practice")) {
    botResponse = "Mindfulness meditation involves paying attention to the present moment, including thoughts, feelings, and bodily sensations, without judgment.";
} else if (message.toLowerCase().includes("what is public speaking") || message.toLowerCase().includes("explain public speaking")) {
    botResponse = "Public speaking is the act of delivering a speech or presentation to a live audience, often with the goal of informing, persuading, or entertaining.";
} else if (message.toLowerCase().includes("how to give constructive feedback") || message.toLowerCase().includes("giving feedback tips")) {
    botResponse = "Give constructive feedback by focusing on the behavior, not the person, being specific, explaining the impact, and offering solutions or suggestions for improvement.";
} else if (message.toLowerCase().includes("what is bureaucracy") || message.toLowerCase().includes("explain bureaucracy")) {
    botResponse = "Bureaucracy refers to a system of administration in which the organization is divided into departments, offices, and bureaus, each with its own specific functions and responsibilities.";
} else if (message.toLowerCase().includes("what is a podcast") || message.toLowerCase().includes("explain podcast")) {
    botResponse = "A podcast is an episodic series of spoken word digital audio files that a user can download to a personal device for easy listening. They are often streamed online as well.";
} else if (message.toLowerCase().includes("what is virtual reality") || message.toLowerCase().includes("explain vr")) {
    botResponse = "Virtual reality (VR) is a simulated experience that can be similar to or completely different from the real world. Applications of virtual reality include entertainment (e.g., video games), education (e.g., medical or military training), and business (e.g., virtual meetings).";
} else if (message.toLowerCase().includes("what is augmented reality") || message.toLowerCase().includes("explain ar")) {
    botResponse = "Augmented reality (AR) is an interactive experience of a real-world environment where the objects that reside in the real world are enhanced by computer-generated perceptual information, sometimes across multiple sensory modalities, including visual, auditory, haptic, somatosensory, and olfactory.";
} else if (message.toLowerCase().includes("what is the internet of things") || message.toLowerCase().includes("explain iot")) {
    botResponse = "The Internet of Things (IoT) describes the network of physical objects—'things'—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet.";
} else if (message.toLowerCase().includes("what is gamification") || message.toLowerCase().includes("explain gamification")) {
    botResponse = "Gamification is the application of game-design elements and game principles in non-game contexts. It aims to engage users and solve problems.";
} else if (message.toLowerCase().includes("what is digital citizenship") || message.toLowerCase().includes("explain digital citizenship")) {
    botResponse = "Digital citizenship refers to the responsible use of technology by anyone who uses computers, the internet, and digital devices to engage with society on any level.";
} else if (message.toLowerCase().includes("what is a meme") || message.toLowerCase().includes("explain internet meme")) {
    botResponse = "An internet meme is an activity, concept, catchphrase, or piece of media that spreads, often as mimicry or for humorous purposes, from person to person via the Internet.";
} else if (message.toLowerCase().includes("what is cultural intelligence") || message.toLowerCase().includes("explain cq")) {
    botResponse = "Cultural intelligence (CQ) is the capability to relate and work effectively across cultures. It involves understanding and adapting to different cultural norms and values.";
} else if (message.toLowerCase().includes("what is critical thinking") || message.toLowerCase().includes("how to think critically")) {
    botResponse = "Critical thinking involves analyzing information objectively, identifying biases, evaluating arguments, and forming well-reasoned judgments rather than simply accepting information at face value.";
} else if (message.toLowerCase().includes("what is continuous learning") || message.toLowerCase().includes("explain lifelong learning")) {
    botResponse = "Continuous learning, or lifelong learning, is the ongoing, voluntary, and self-motivated pursuit of knowledge for personal or professional development. It's about staying curious and adapting to new information.";
} else if (message.toLowerCase().includes("what is a budget") || message.toLowerCase().includes("explain budgeting")) {
    botResponse = "A budget is an estimated summary of income and expenses over a period of time, used as a plan for spending and saving money.";
} else if (message.toLowerCase().includes("what is emotional intelligence") || message.toLowerCase().includes("explain emotional intelligence")) {
    botResponse = "Emotional intelligence (EQ) is the ability to understand, use, and manage your own emotions in positive ways to relieve stress, communicate effectively, empathize with others, overcome challenges, and defuse conflict.";
} else if (message.toLowerCase().includes("what is a spreadsheet") || message.toLowerCase().includes("explain spreadsheets")) {
    botResponse = "A spreadsheet is an interactive computer application for organization, analysis, and storage of data in tabular form, commonly used for financial calculations and data management.";
} else if (message.toLowerCase().includes("what is a database") || message.toLowerCase().includes("explain database")) {
    botResponse = "A database is an organized collection of structured information, or data, typically stored electronically in a computer system.";
} else if (message.toLowerCase().includes("what is encryption") || message.toLowerCase().includes("explain data encryption")) {
    botResponse = "Encryption is the process of encoding information in such a way that only authorized parties can access it and those who are not authorized cannot. It secures data during transmission and storage.";
} else if (message.toLowerCase().includes("what is a firewall") || message.toLowerCase().includes("explain computer firewall")) {
    botResponse = "A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules, protecting a network from unauthorized access.";
} else {
    botResponse = "I'm not sure I have an answer for that. Could you try asking in a different way or about another topic?";
}


            appendMessage('bot', botResponse);
        }, 800); // Simulate network delay
    }

    // Event listeners
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    // You would define a function like this if you were connecting to a real API:
    /*
    async function getAIResponse(userMessage) {
        try {
            // Replace with your actual API endpoint and key
            const response = await fetch('YOUR_AI_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer YOUR_API_KEY' // If required by API
                },
                body: JSON.stringify({ prompt: userMessage }) // Adjust based on API requirements
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            // Adjust to extract the actual AI response from the API's JSON
            return data.choices[0].text; // Example for OpenAI, might be different for Gemini
        } catch (error) {
            console.error("Error fetching AI response:", error);
            return "Oops! I encountered an error. Please try again later.";
        }
    }
    */
});